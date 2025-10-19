<script>
import faqsData from '../data/faqs.json'

export default {
  name: 'FAQSection',
  props: {
    title: {
      type: String,
      default: 'Frequently Asked Questions'
    },
    subtitle: {
      type: String,
      default: 'FAQ'
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    maxItems: {
      type: Number,
      default: null
    },
    category: {
      type: String,
      default: null
    },
    columns: {
      type: Number,
      default: 2,
      validator(value) {
        return [1, 2].includes(value)
      }
    }
  },
  data() {
    return {
      faqs: faqsData.faqs
    }
  },
  computed: {
    filteredFaqs() {
      let filtered = this.faqs;
      
      // Filter by category if specified
      if (this.category) {
        filtered = filtered.filter(faq => faq.category === this.category);
      }
      
      // Limit items if maxItems is specified
      if (this.maxItems) {
        filtered = filtered.slice(0, this.maxItems);
      }
      
      return filtered;
    },
    faqColumn1() {
      if (this.columns === 1) return this.filteredFaqs;
      
      const midpoint = Math.ceil(this.filteredFaqs.length / 2);
      return this.filteredFaqs.slice(0, midpoint);
    },
    faqColumn2() {
      if (this.columns === 1) return [];
      
      const midpoint = Math.ceil(this.filteredFaqs.length / 2);
      return this.filteredFaqs.slice(midpoint);
    }
  },
  methods: {
    generateUniqueId(baseId, index) {
      return `${baseId}_${this.$attrs.id || 'faq'}_${index}`;
    }
  }
}
</script>

<template>
  <section class="faq-section py-5 px-md-5 px-3">
    <!-- Header -->
    <div v-if="showHeader" class="mb-4">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
        {{ subtitle }}
      </h6>
      <h2 class="fw-bold mb-4">{{ title }}</h2>
    </div>

    <!-- FAQ Content -->
    <div class="row g-4">
      <!-- Single Column Layout -->
      <div v-if="columns === 1" class="col-12">
        <div class="accordion border-0" :id="`faqAccordion_${$attrs.id || 'default'}`">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="faq.id"
            class="accordion-item border rounded-4 mb-3"
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button bg-white fw-bold text-dark rounded-4"
                :class="{ collapsed: !faq.expanded }"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#${generateUniqueId(faq.id, index)}`"
                :aria-expanded="faq.expanded"
                :aria-controls="generateUniqueId(faq.id, index)"
              >
                {{ faq.question }}
              </button>
            </h2>
            <div
              :id="generateUniqueId(faq.id, index)"
              class="accordion-collapse collapse"
              :class="{ show: faq.expanded }"
              :data-bs-parent="`#faqAccordion_${$attrs.id || 'default'}`"
            >
              <div class="accordion-body text-body-tertiary">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <template v-else>
        <!-- First Column -->
        <div class="col-md-6">
          <div class="accordion border-0" :id="`faqAccordion1_${$attrs.id || 'default'}`">
            <div
              v-for="(faq, index) in faqColumn1"
              :key="faq.id"
              class="accordion-item border rounded-4 mb-3"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button bg-white fw-bold text-dark rounded-4"
                  :class="{ collapsed: !faq.expanded }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${generateUniqueId(faq.id, index)}_col1`"
                  :aria-expanded="faq.expanded"
                  :aria-controls="`${generateUniqueId(faq.id, index)}_col1`"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div
                :id="`${generateUniqueId(faq.id, index)}_col1`"
                class="accordion-collapse collapse"
                :class="{ show: faq.expanded }"
                :data-bs-parent="`#faqAccordion1_${$attrs.id || 'default'}`"
              >
                <div class="accordion-body text-body-tertiary">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Column -->
        <div class="col-md-6">
          <div class="accordion border-0" :id="`faqAccordion2_${$attrs.id || 'default'}`">
            <div
              v-for="(faq, index) in faqColumn2"
              :key="faq.id"
              class="accordion-item border rounded-4 mb-3"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button bg-white fw-bold text-dark rounded-4"
                  :class="{ collapsed: !faq.expanded }"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${generateUniqueId(faq.id, index)}_col2`"
                  :aria-expanded="faq.expanded"
                  :aria-controls="`${generateUniqueId(faq.id, index)}_col2`"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div
                :id="`${generateUniqueId(faq.id, index)}_col2`"
                class="accordion-collapse collapse"
                :class="{ show: faq.expanded }"
                :data-bs-parent="`#faqAccordion2_${$attrs.id || 'default'}`"
              >
                <div class="accordion-body text-body-tertiary">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: var(--bs-white);
  color: var(--bs-dark);
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: var(--bsh-primary);
}

.accordion-item {
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

@media (max-width: 768px) {
  .faq-section {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
</style>