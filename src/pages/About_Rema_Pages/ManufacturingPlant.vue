<template>
  <CorporatePageShell :hero-image="plantImage">
    <div class="global-corporate-font text-grey-9 text-body1">
      <CorporateSectionHeading title="Manufacturing Plant In Howick" />
      <section class="plant-intro corporate-surface">
        <div>
          <div class="section-kicker">Our manufacturing advantage</div>
          <h1>Southern African production. Global performance.</h1>
          <p
            >From Howick, our teams manufacture and test industrial rubber
            products for demanding markets around the world.</p
          >
        </div>
        <div class="plant-stats">
          <div><strong>52 900 m²</strong><span>under cover</span></div>
          <div><strong>1921</strong><span>factory opened</span></div>
          <div
            ><strong>5 400 kN/m</strong
            ><span>belt strength capability</span></div
          >
        </div>
      </section>
      <div
        class="q-gutter-y-lg q-mb-xl text-weight-light line-height-relaxed body-text-style"
      >
        <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
      </div>

      <q-separator class="q-my-xl" color="grey-4" />
      <h3 class="corporate-heading text-h6 text-weight-bold text-red q-mb-lg"
        >Our Factory is responsible for</h3
      >
      <div class="responsibilities-list">
        <div v-for="item in responsibilities" :key="item" class="list-item-row">
          <q-icon name="north_east" color="red" size="18px" />
          <span>{{ item }}</span>
        </div>
      </div>
      <CorporateBanner class="q-mt-xl" />
    </div>
  </CorporatePageShell>
</template>

<script setup>
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporatePageShell from '@/components/CorporatePageShell.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'
import plantImage from '@/assets/howick.jpg'

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

const paragraphs = [
  'The rubber industry in Southern Africa was pioneered by The South African Rubber Manufacturing Company Limited, now known as Dunlop Industrial Products. The manufacturing facility is located on the banks of the Mgeni river in Kwa-Zulu Natal. In 1919 work started on setting up a production facility in the town of Howick chosen for ready availability to water, and the potential to generate hydroelectric power. The first undertaking was to lay a pipeline from the top of the Howick waterfalls down to a turbine 100 m below. This turbine would provide the electric power requirements for the new factory which was officially opened on 21 February 1921. The hydroelectric plant is still in operation but now only provides emergency backup power. The vast range of industrial rubber goods now manufactured is only possible with significant electric power from the National grid.',
  'The present-day facility is located on a site of just more than 18 hectares with a total of 52,900 m² under cover. From the outset the goal of this production facility has been to manufacture rubber products of a quality equal to the best in the world. The fact that many of the products now manufactured are exported all around the world is testimony of the fact that the goal has been admirably met.',
  'In 1929 the manufacture of conveyor belting commenced, and Dunlop Industrial Products have kept pace with technological advances in this field so that now a full range of conveyor belting products are manufactured for the world market. The range includes PowaCORD, steel cord reinforced conveyor belting, in strengths up to 5400 kN/m and widths up to 2200 mm. PowaPLY all synthetic EP and EE multi-ply carcass belts with a range of cover qualities in a full range of strengths up to 3150 kN/m are also manufactured. The state-of-the-art rubber mixing facility ensures consistently high-quality rubber compounds surpassing requirements of all major quality standards are incorporated into all the industrial rubber products manufactured at the facility. Three rubber compound mixers provide black rubber compounds while a fourth is dedicated to mixing coloured rubber compounds to downstream production facilities. Mixing capacity is sufficient that mixed rubber compound is also sold to other rubber goods manufacturers.',
  'The range of rubber hose products manufactured at the Dunlop Industrial Products facility in Howick includes textile reinforced hoses used extensively in mining and other industries, vacuum brake hose, used in the braking systems of older rail wagons and airbrake hose used in more modern rail wagons and coaches. A highly specialised hose product developed at the factory in conjunction with the customer is the high-pressure pinch valve sleeve. Also developed in conjunction with customer needs is suction dredging hose used in recovering minerals from flooded mineral sands ponds. A special feature of these hoses is the loose flange allowing fast and easy connection of multiple hoses without incorporating a twisting moment in the connected hoses.',
  'A comprehensive range of rubber products for the automotive industry have long been a major part of the range of products manufactured at the Howick factory. These include high performance radiator hoses, door seals and boot seals. The technical expertise acquired over many years of supplying rubber products meeting the stringent requirements of the automotive industry often ensures quick acceptance of products for new automotive models.',
  'Since the acquisition of Dunlop Industrial Products by Rema Tip Top AG many of the world renowned Rema Tip Top adhesive, sheeting and moulded products are manufactured at the Howick factory.',
  'The range of moulded rubber products also includes high performance footwear components supplied to the armed forces.',
  'The Rema Tip Top organisation focuses marketing efforts in 4 key areas: Automotive, Conveyor Belting, Material Processing and Surface Protection. New products and improvement of existing products are key to remaining a leading force in these.',
  'The recently acquired conveyor idler manufacturing facility is now located at the manufacturing facility in Howick. The improved new premises ensure the market is provided with an even better roller with the renowned performance and life expectancy associated with the unique bearing protection seal.'
]
</script>

<style scoped>
.responsibilities-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.list-item-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #333;
  font-size: 0.95rem;
  padding: 0.8rem 1rem;
  background: #f3f5f4;
  border-left: 3px solid #ed3028;
}

.plant-intro {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
}

.section-kicker {
  margin-bottom: 0.6rem;
  color: #c5221d;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.plant-intro h1 {
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.08;
}

.plant-intro p {
  line-height: 1.6;
}

.plant-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: center;
}

.plant-stats div {
  display: grid;
  gap: 0.35rem;
  padding-left: 1rem;
  border-left: 1px solid #d9dfe1;
}

.plant-stats strong {
  color: #17242c;
  font-size: 1.1rem;
}

.plant-stats span {
  color: #748087;
  font-size: 0.75rem;
}

@media (max-width: 767px) {
  .plant-intro,
  .responsibilities-list {
    grid-template-columns: 1fr;
  }

  .plant-stats {
    grid-template-columns: 1fr;
  }
}
</style>
