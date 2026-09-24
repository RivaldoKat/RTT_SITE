const aboutSearchContent = [
  {
    label: 'Vision & Mission',
    to: '/vision-mission',
    group: 'About Rema Tip Top',
    icon: 'public',
    description:
      'Our purpose, global vision, customer focus and business sectors.',
    keywords:
      'mission vision values global know-how customer service ports pulp paper quarries cement chemicals mining'
  },
  {
    label: 'Our Presence',
    to: '/our-presence',
    group: 'About Rema Tip Top',
    icon: 'public',
    description: 'Local expertise and technical support across 176+ countries.',
    keywords:
      'global network Africa branches countries service technicians local support international'
  },
  {
    label: 'Manufacturing Plant',
    to: '/manufacturing-plant',
    group: 'About Rema Tip Top',
    icon: 'precision_manufacturing',
    description:
      'Howick manufacturing, rubber compounds, conveyor belts and industrial products.',
    keywords:
      'Howick factory production rubber mixing conveyor belting hose idlers pulley lagging wear protection adhesives'
  },
  {
    label: 'ISO-Certified Company',
    to: '/iso-certified',
    group: 'About Rema Tip Top',
    icon: 'verified',
    description:
      'Quality, environmental management and conveyor belting standards.',
    keywords:
      'ISO 9001 ISO 14001 MASC-065M DIN EN ISO SANS quality safety environmental standards'
  },
  {
    label: 'Our Brands & Services',
    to: '/our-brands-services',
    group: 'About Rema Tip Top',
    icon: 'business',
    description:
      'Rema Tip Top, Dunlop, Sarmcol, Rudex and Otrem specialist brands.',
    keywords:
      'brands services Rema Tip Top Dunlop Sarmcol Rudex Otrem tyre repair industrial products'
  }
]

const productSearchContent = [
  [
    'Adhesive Systems',
    'adhesive-systems',
    'REMA TIP TOP bonding systems, adhesives, tools and repair materials.',
    'bonding glue rubber adhesive repair vulcanising cold bond hot bond'
  ],
  [
    'Automotive',
    'automotive',
    'Tyre repair materials and customer-focused automotive solutions.',
    'tyres automotive OTR truck bus motorcycle bicycle repair retreading'
  ],
  [
    'Belt Cleaning Systems',
    'belt-cleaning',
    'Conveyor belt cleaning systems that reduce losses and improve safety.',
    'conveyor cleaner belt cleaning efficiency material loss safety'
  ],
  [
    'Belt Splicing Presses',
    'belt-splicing-presses',
    'High-quality conveyor belt splicing presses and service equipment.',
    'splicing press conveyor repair tools temperature pressure'
  ],
  [
    'Belt Splicing Services, Materials & Tools',
    'belt-splicing-services-materials-tools',
    'Materials, tools and services for textile and steel cord belt repairs.',
    'splicing vulcanising repair tools conveyor textile steel cord hot cold'
  ],
  [
    'Conveyor Belting',
    'conveyor-belting',
    'High-performance textile, steel cord and specialist conveyor belts.',
    'conveyor belting belts textile steel cord solid woven heat oil chemical steep incline'
  ],
  [
    'Hand Built Mining & Industrial Hose',
    'hand-built-mining-industrial-hose',
    'Durable hand-built hoses for demanding mining and industrial applications.',
    'hose mining industrial suction dredging pinch valve vacuum brake'
  ],
  [
    'Idler Systems',
    'idler-systems',
    'Steel, impact and HDPE idlers and conveyor frame systems.',
    'idler rollers HDPE steel impact self-aligning suspended bearings conveyor'
  ],
  [
    'Mill Liners',
    'mill-liners',
    'Customer-specific mill lining systems for mineral processing.',
    'mill liners mining mineral processing wear protection downtime productivity'
  ],
  [
    'Pulley Lagging',
    'pulley-lagging',
    'High-performance pulley lagging for traction and equipment life.',
    'pulley lagging traction wear corrosion belt tension conveyor'
  ],
  [
    'Technical Advisory',
    'technical-advisory',
    'Practical technical support for selection, installation and maintenance.',
    'technical advisory application support maintenance installation specialists'
  ],
  [
    'Rema Tip Top Academy',
    'rema-tip-top-academy',
    'Practical training and knowledge sharing for customers and service teams.',
    'academy training skills safety learning service quality technicians'
  ]
].map(([label, slug, description, keywords]) => ({
  label,
  to: `/products/${slug}`,
  group: 'Products',
  icon: 'precision_manufacturing',
  description,
  keywords
}))

export const searchIndex = [
  ...aboutSearchContent,
  ...productSearchContent,
  {
    label: 'Contact Us',
    to: '/contact',
    group: 'Company',
    icon: 'mail',
    description: 'Contact our regional offices and technical support team.',
    keywords:
      'contact email phone Benoni Howick South Africa Ghana Zambia Zimbabwe enquiry quote support'
  }
]
