<template>
  <!-- Main parallax image section at the top -->
  <div class="row justify-between">
    <q-parallax src="src/assets/howick.jpg" :height="500" />
  </div>

  <!-- Centered Content Wrapper -->
  <div class="main-layout-container global-corporate-font q-mx-auto q-pa-md">

    <!-- Text Content Section -->
    <div class="text-grey-9 text-body1 q-mb-xl">
      <!-- Section Heading -->
      <div class="corporate-heading text-h5 text-weight-bold text-dark q-mb-xs">
        Manufacturing Plant In Howick
      </div>

      <!-- Dotted Divider Line -->
      <div class="dotted-separator q-mb-xl"></div>

      <!-- Content Paragraphs -->
      <div class="q-gutter-y-lg q-mb-xl text-weight-light line-height-relaxed body-text-style">
        <p v-for="(para, i) in Paragraphs.manufacturing" :key="i">{{ para }}</p>
      </div>
    </div>

    <q-separator vertical="false" class="q-my-xl" color="grey-4" />

    <h3 class="corporate-heading text-h6 text-weight-bold text-red q-mb-xs">
      Our Factory is responsible for
    </h3>

    <!-- The List with Red Arrows -->
    <div class="responsibilities-list">
      <div 
        v-for="(item, index) in responsibilities" 
        :key="index" 
        class="list-item-row"
      >
        <!-- Inline SVG Arrow (Red) -->
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#ff2a2a" 
          stroke-width="2.5" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          class="arrow-icon"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
        
        <span class="list-text">{{ item }}</span>
      </div>
    </div>

    <!-- The solid banner component -->
    <div class="row flex-center corporate-banner text-white q-py-sm q-px-md text-weight-bold q-mt-xl">
      GERMAN ENGINEERING / MADE IN AFRICA / FOR AFRICA
    </div>

  </div>
</template>

<script setup>
const responsibilities = [
  'Mixing of all Rubber Compounds',
  'Steel Cord and Textile reinforced Conveyor Belts',
  'Conveyor Skirting',
  'Belt Conveyor Idlers',
  'Pulley Lagging',
  'Belt Scrapers and Pulley Lagging',
  'Wear Protection Sheeting',
  'Adhesives and Splicing Materials',
  'Hand Built Mining & Industrial Hose',
  'Special Moulded Rubber Products'
]

const Paragraphs = {
  manufacturing: [
    `The rubber industry in Southern Africa was pioneered by The South African Rubber Manufacturing Company Limited, now known as Dunlop Industrial Products. The manufacturing facility is located on the banks of the Mgeni river in Kwa-Zulu Natal. In 1919 work started on setting up a production facility in the town of Howick chosen for ready availability to water, and the potential to generate hydroelectric power. The first undertaking was to lay a pipeline from the top of the Howick waterfalls down to a turbine 100 m below. This turbine would provide the electric power requirements for the new factory which was officially opened on 21 February 1921. The hydroelectric plant is still in operation but now only provides emergency backup power. The vast range of industrial rubber goods now manufactured is only possible with significant electric power from the National grid.`,
    `The present-day facility is located on a site of just more than 18 hectares with a total of 52,900 m² under cover. From the outset the goal of this production facility has been to manufacture rubber products of a quality equal to the best in the world. The fact that many of the products now manufactured are exported all around the world is testimony of the fact that the goal has been admirably met.`,
    `In 1929 the manufacture of conveyor belting commenced, and Dunlop Industrial Products have kept pace with technological advances in this field so that now a full range of conveyor belting products are manufactured for the world market. The range includes PowaCORD, steel cord reinforced conveyor belting, in strengths up to 5400 kN/m and widths up to 2200 mm. PowaPLY all synthetic EP and EE multi-ply carcass belts with a range of cover qualities in a full range of strengths up to 3150 kN/m are also manufactured. The state-of-the-art rubber mixing facility ensures consistently high-quality rubber compounds surpassing requirements of all major quality standards are incorporated into all the industrial rubber products manufactured at the facility. Three rubber compound mixers provide black rubber compounds while a fourth is dedicated to mixing coloured rubber compounds to downstream production facilities. Mixing capacity is sufficient that mixed rubber compound is also sold to other rubber goods manufacturers.`,
    `The range of rubber hose products manufactured at the Dunlop Industrial Products facility in Howick includes textile reinforced hoses used extensively in mining and other industries, vacuum brake hose, used in the braking systems of older rail wagons and airbrake hose used in more modern rail wagons and coaches. A highly specialised hose product developed at the factory in conjunction with the customer is the high-pressure pinch valve sleeve. Also developed in conjunction with customer needs is suction dredging hose used in recovering minerals from flooded mineral sands ponds. A special feature of these hoses is the loose flange allowing fast and easy connection of multiple hoses without incorporating a twisting moment in the connected hoses.`,
    `A comprehensive range of rubber products for the automotive industry have long been a major part of the range of products manufactured at the Howick factory. These include high performance radiator hoses, door seals and boot seals. The technical expertise acquired over many years of supplying rubber products meeting the stringent requirements of the automotive industry often ensures quick acceptance of products for new automotive models.`,
    `Since the acquisition of Dunlop Industrial Products by Rema Tip Top AG many of the world renowned Rema Tip Top adhesive, sheeting and moulded products are manufactured at the Howick factory.`,
    `The range of moulded rubber products also includes high performance footwear components supplied to the armed forces.`,
    `The Rema Tip Top organisation focuses marketing efforts in 4 key areas: Automotive, Conveyor Belting, Material Processing and Surface Protection. New products and improvement of existing products are key to remaining a leading force in these.`,
    `The recently acquired conveyor idler manufacturing facility is now located at the manufacturing facility in Howick. The improved new premises ensure the market is provided with an even better roller with the renowned performance and life expectancy associated with the unique bearing protection seal.`
  ]
}
</script>

<style scoped>
/* Import globally recognized high-readability corporate fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Montserrat:wght@600;700&display=swap');

.global-corporate-font {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.corporate-heading {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em;
}

.main-layout-container {
  width: 100%;
  max-width: 1200px;
}

.dotted-separator {
  border-bottom: 4.6px dotted #b71c1c;
  width: 100%;
}

.body-text-style {
  letter-spacing: 0.01em;
  font-size: 0.95rem;
}

.line-height-relaxed p {
  line-height: 1.65;
  margin-bottom: 0.75rem;
}

/* Custom List Styling to match the image */
.responsibilities-list {
  display: flex;
  flex-direction: column;
  gap: 12px; /* Space between items */
}

.list-item-row {
  display: flex;
  align-items: center; /* Vertically centers arrow and text */
  gap: 10px;
}

.arrow-icon {
  flex-shrink: 0; /* Prevents arrow from squishing */
  position: relative;
  top: -1px; /* Optical alignment tweak */
}

.list-text {
  font-size: 0.95rem;
  color: #333; /* Dark grey text like the image */
  letter-spacing: 0.01em;
}

.corporate-banner {
  background-color: #ff2a2a;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.85rem;
  letter-spacing: 0.05em;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

@media (max-width: 599px) {
  .corporate-banner {
    font-size: 1.15rem;
    letter-spacing: 0.03em;
  }
}
</style>
