import DoctorCard from './DoctorCard';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Richard Semelka',
      specialty: 'Gadolinium Deposition Disease Specialist',
      title: 'Radiologist, Researcher & GDD Pioneer',
      color: 'blue' as const,
      image: '/semelka.avif',
      background:
        'Dr. Richard Semelka has been one of the major forces in Radiology for 3 decades. He has written 350+ peer-reviewed articles in Radiology and 17 textbooks, including Health Care Reform in Radiology. He has been one of the most accomplished authors on safety, especially regarding medical radiation, patient information, overuse of imaging, NSF, and most recently GDD. He served as Director of MR services (Dec 1992 - Sept 2017) and Vice-Chair of Quality and Safety (Dec 1, 2007 – 2016) at the University of North Carolina. Dr. Semelka has been a leading researcher and practitioner in MRI, has pioneered and is the leading author worldwide on abdominal MRI, and is the radiologist with the broadest research and publication record on safety in Radiology, having authored major works on informed consent, overuse of imaging, risk of cancer from CT and x-rays, nephrogenic system fibrosis, Gadolinium deposition in the brain on MRI, and most recently has pioneered in the medical literature the subject of Gadolinium Deposition Disease (GDD) and is presently the leading author on the subject. GDD is essentially a severe persistent disease secondary to the use of Gadolinium Based Contrast Agents (GBCAs) in individuals who often have normal kidney function. Dr. Semelka has had a profound international role in GDD, essentially being consulted by people from around the world and overseeing their treatment, from India to New Zealand, and every country in between. The majority are in the US, with Canada and the UK, and Europe as the other major centers for patient treatment. In many respects, Dr. Semelka has unofficially become the Protector Publicus (protector of the people) by focusing on the judicious and appropriate use of advanced imaging throughout the world.',
      approach:
        'Presently, Dr. Semelka focuses on treating patients with Gadolinium Deposition Disease at his Medical Clinic in North Carolina. His approach emphasizes starting with a healthy diet including food items particularly considered to have health benefits, combined with activities that maintain physical wellness and range of motion. He recommends reading his blogs and visiting Gadttrac.org for comprehensive information. His preference is to focus on food items and cold-press juicing before embarking on most supplements. He does not strongly advocate any supplements, as their efficacy would require randomized controlled studies, which generally do not exist for supplements. If any item does not agree with you physically, or you develop some form of reaction, then do not use it.',
      whatWorks: [
        'Core Items: Healthy diet with plenty of fruits and vegetables, alkaline water, cold-press juicing, staying active (avoid excessive exercise), plenty of sleep, Chlorella, LDN (low-dose naltrexone), GABA supplement, Ginger oil, Epsom salt baths, hot baths or showers, conventional or infrared sauna, Hyperbaric Oxygen Therapy, Turmeric/curcumin, Vitamin C supplement, Daily MVI with minerals',
        'Physical & Mental Health: Walking/exercise, stretching, Yoga or Tai Chi, massage therapy, mind relaxation/meditation, acupuncture, lymphatic massage, physical therapy (modified as necessary), TENS (transcutaneous electrical nerve stimulation), ozone therapy',
        'Diet & Healthy Foods: Avoid refined/processed sugars and food additives. Drink alkaline water, purified waters, electrolyte/mineral-containing beverages, celery juice, teas with ginger/turmeric. Eat lots of vegetables (spinach, leafy greens, tubers). Eat fruits with pectin: apples, apricots, blackberries, blueberries, cherries, cranberries, grapefruits, guavas, lemons, limes, plums, grapes, oranges, peaches, pears, pineapples, raspberries, strawberries, bananas',
        'Natural Chelators: Chlorella, cilantro, amino acids found in eggs and fish, onions, garlic, oregano, rosemary, thyme, sage, parsley, alfalfa, dark green vegetables, fruit pectin',
        'Foods High in Antioxidants: Dark chocolate, pecans, cinnamon powder, blueberries, strawberries, artichokes, olives, goji berries, kiwi, raspberries, avocados, red cabbage, beans, beets, spinach',
        'Natural Supplements & Topicals: Apple cider vinegar, coconut oil topical (with peppermint or oregano extract for oral pain), ginger oil, rosemary oil topical, peppermint oil topical, arnica topical, cinnamon oil topical (low concentration), magnesium topical spray, CBD topical ointments/creams',
        'Oral Supplements: CoQ10/ubiquinol, Fish Oil (Omega 3s), Milk Thistle, Selenium, ATP Fuel, Niacin (Vitamin B3), Vitamin B6, Vitamin B12, Vitamin D3, Vitamin E, Magnesium, Zinc (do not use if receiving Zn-DTPA), Thiamine, Folate, Ginkgo biloba, Probiotics',
        'Inflammation Reduction & General Detox: ALA (Alpha Lipoic Acid), Glutathione, NAC (N-acetyl cysteine), Activated Charcoal/zeolite, Bentonite Clay, MCP (modified citrus pectin), PEA (palmitoyethanolamide)',
        'Medications & Pain Relief: Antihistamines, Ibuprofen, Enteric-coated aspirin, Fibromyalgia drugs (variable benefits): Amitriptyline Rx, Nortriptyline Rx, Gabapentin Rx, Lyrica Rx, CBD Oil orally, THC oral doses',
        'Important: Always consult with your doctor before taking new supplements or trying new treatments. What is safe and effective for one person may not be appropriate for you due to underlying health conditions and/or medications. Consider your allergies. Avoid starting multiple new supplements at the same time if possible. Avoid excessive exercise as it can cause metabolic acidosis. If things do not work or are not palatable, do not do them or ingest them. Not everything works for everyone.',
      ],
      howToReach:
        'Website and blog: https://www.richardsemelka.com/ | Contact: https://www.richardsemelka.com/contact-dr-semelka | Dr. Semelka practices at his Medical Clinic in North Carolina, focusing on treating patients with Gadolinium Deposition Disease. He has been consulted by people from around the world, with the majority in the US, Canada, UK, and Europe.',
      book: {
        title: 'Heavy Metals. The White Sabbath of Toxins',
        image: '/whitesabbath.jpg',
        description:
          'For comprehensive information about heavy metal toxicity and treatment, including the most up-to-date approaches, refer to Dr. Semelka\'s book. This book provides the most comprehensive look at a broad range of heavy metals, focusing on the critical aspects that an informed general public would need to know about heavy metal toxicity and treatment.',
        link: 'https://amzn.to/4pF7hov',
        linkText: 'View Dr. Semelka\'s Book',
      },
    },
    {
      name: 'Dr. Brent Wagner',
      specialty: 'Nephrogenic Systemic Fibrosis & Gadolinium Retention Expert',
      title:
        'Professor, Department of Internal Medicine, UNM School of Medicine | Renal Section Chief, New Mexico VA Health Care System | Director, Kidney Institute of New Mexico',
      color: 'green' as const,
      image: '/wagner.jpg',
      background:
        'Dr. Brent Wagner is a native New Mexican and a graduate of the University of New Mexico (1990, 1992), the University of New Mexico Biomedical Sciences Graduate Program (1995), and the University of New Mexico School of Medicine (1999). He is a certified specialist in Internal Medicine and Nephrology. Dr. Wagner is a world-renowned expert in nephrogenic systemic fibrosis, gadolinium retention, and nanotoxicology. His laboratory was the first to prove experimentally that bone marrow-derived white blood cells (fibrocytes) are involved in NSF, and he was the first to demonstrate that bone marrow possesses a "memory" of gadolinium exposure—fibrosis is more severe in those who have had repeated MRI contrast administrations. His groundbreaking research has shown that oxalic acid, found in many foods, can generate nanoparticles of gadolinium in human tissues, which may explain why some individuals develop severe symptoms while others do not. Dr. Wagner leads an international patient registry to identify risk factors for gadolinium-related complications.',
      approach:
        "Dr. Wagner's research has revealed a critical finding: oxalic acid can cause gadolinium to precipitate out of contrast agents and form nanoparticles in the body. This discovery points to dietary factors that may significantly impact gadolinium toxicity. His approach emphasizes understanding the metabolic milieu that may predispose individuals to nanoparticle formation and severe disease responses. He recommends avoiding high-oxalate foods and vitamin C supplements before MRI scans with contrast, as these can react with gadolinium and potentially form harmful nanoparticles.",
      whatWorks: [
        "AVOID OXALATES! This is the main recommendation from Dr. Wagner's research. Oxalic acid, found in many plant-based foods, can generate nanoparticles of gadolinium in human tissues",
        'Avoid high-oxalate foods: spinach, rhubarb, most nuts, berries, chocolate, and other plant-based foods containing oxalic acid',
        'Avoid vitamin C supplements before MRI scans with contrast, as vitamin C can form oxalic acid in the body, which reacts with gadolinium',
        'Understanding your metabolic state: Some individuals may be in a "high oxalic state" that makes them more prone to gadolinium nanoparticle formation',
        "Participate in research: Dr. Wagner's team is building an international patient registry to identify risk factors. Contact the Kidney Institute of New Mexico to learn more",
        'Comprehensive assessment: Evaluation of medical conditions, medications, and dietary supplements at the time of gadolinium exposure to understand individual risk factors',
        'Monitoring for nephrogenic systemic fibrosis (NSF): Especially important for patients with compromised kidney function, as NSF can be severely disabling and potentially fatal',
      ],
      howToReach:
        'Contact the Kidney Institute of New Mexico: Julie A Harris at JuHarris@salud.unm.edu | Dr. Wagner practices at the University of New Mexico School of Medicine and the New Mexico Veterans Administration Health Care System in Albuquerque, New Mexico.',
      registry: {
        title: 'LEGACY OF LATENCY: THE NATURAL HISTORY OF SYMPTOMS STEMMING FROM TOXIC EXPOSURES',
        image: '/gadregistry.jpg',
        imageFullSize: '/gadregistry.jpg',
        description:
          'HRRC ID 24-413. People are exposed to toxicants, including metals, from the environment (such as in drinking water) or as patients in the healthcare system (such as gadolinium). This registry tracks the history of medically unexplained symptoms and, if any, related to toxic exposures. We will obtain your history and conduct a physical examination during your participation. We will ask for a 24-hour urine collection to measure toxicants (e.g., gadolinium) and time this with exposure—e.g., the administration of the magnetic resonance imaging contrast. We will also obtain other samples (blood, nail clippings, and hair tufts) to analyze how metal exposure triggers chemicals that may promote disease. You are free to provide any additional information relevant to your symptoms. We will repeat blood, urine, hair, and nail testing at 6-month intervals. By participating in this registry, we aim to define the natural history of medically unexplained symptoms and how these relate to toxic exposures. Your participation in this research will last for the duration of the study. Upon completion participants will receive a $50 Merchandise Card. We are conducting this registry through the University of New Mexico Health Sciences Center, Division of Nephrology, Department of Medicine.',
        criteria: [
          'Adults 18 years of age or older',
          'Willing and able to comply with a scheduled 90-minute visit, blood sample collection, and urine collection',
        ],
        contact:
          'If you are interested in participating and think you may qualify, contact the Kidney Institute of New Mexico: Julie A Harris at JuHarris@salud.unm.edu',
      },
      researchArticle: {
        title:
          'UNM Scientists Discover How Nanoparticles of Toxic Metal Used in MRI Scans Infiltrate Human Tissue',
        url: 'https://hscnews.unm.edu/news/unm-scientists-discover-how-nanoparticles-of-toxic-metal-used-in-mri-scans-infiltrate-human-tissue',
        source: 'University of New Mexico Health Sciences News (2025)',
        quote:
          "This nanoparticle formation might explain why there's such an amplification of the disease. When a cell is trying to deal with this alien metallic nanoparticle within it, it's going to send out signals that tell the body to respond to it.",
        attribution:
          'Brent Wagner, MD, Professor, Department of Internal Medicine in the UNM School of Medicine',
        summary:
          'University of New Mexico researchers studying the health risks posed by gadolinium—a toxic rare earth metal used in MRI scans—found that oxalic acid, a molecule found in many foods and formed in the body from vitamin C, can cause minute amounts of gadolinium to precipitate out of contrast agents and form nanoparticles that infiltrate human tissues. This mechanistic finding helps explain why some individuals have such severe, amplified symptoms after gadolinium exposure and provides a clear rationale for Dr. Wagner’s recommendation to reduce high-oxalate intake and avoid vitamin C supplements around MRI scans with contrast.',
      },
    },
    {
      name: 'Dr. Catriona Walsh',
      specialty: 'Belfast Nutritionist & Burnout Coach',
      title: 'MA (Cantab.), MB BCh BAO, Dip NLC IHS',
      color: 'purple' as const,
      image: '/catriona.jpg',
      background:
        'Dr. Catriona Walsh is a Belfast nutritionist and burnout coach who helps exhausted professionals recover from burnout, chronic illness, and gadolinium toxicity. After working as a paediatric doctor for the NHS for 15 years, she experienced severe burnout, moral injury, and gadolinium toxicity herself following an MRI with contrast. She was diagnosed with Ehlers Danlos Syndrome - Hypermobility Type (EDS-HT), which helped explain many of her symptoms. Dr. Walsh trained in medicine at Cambridge University (MA) and completed her clinical training at Queen\'s University Belfast (MB BCh BAO). She later trained as a nutrition and lifestyle coach through the Institute of Health Sciences. Her personal experience with gadolinium toxicity led her to write an ebook "Contrasts: More than meets the MRI" and create resources to help others. She specializes in functional medicine, using root-cause approaches to support recovery from toxicity, burnout, chronic fatigue, and chronic illness. Based in Belfast and Mid Ulster, she works with clients worldwide.',
      approach:
        'Dr. Walsh uses a three-part approach: Investigate (identifying diet, lifestyle, toxic exposures, stressors, and genetic factors impacting health), Educate (teaching what to change, for how long, why, and when to reintroduce foods and habits), and Coach (providing support, motivation, accountability, and troubleshooting). She emphasizes getting to the root cause rather than suppressing symptoms. Her approach combines her medical training, nutritionist expertise, and personal recovery experience. She uses functional medicine principles similar to emergency medicine: supporting physiology naturally. Her personalized protocols often include an autoimmune protocol-like diet with medicinal mushrooms, lower carbohydrates, medicinal herbs, and supplements focused on protecting the brain and organs while boosting metabolism and mitochondrial function. She works with people suffering from gadolinium toxicity, burnout, chronic fatigue, EDS/hypermobility, and other chronic conditions.',
      whatWorks: [
        'Personalized nutrition and lifestyle coaching based on individual needs and root causes',
        'Functional medicine approach focusing on diet, behaviors, and toxic exposures rather than symptom suppression',
        'Autoimmune protocol diet modified for gadolinium toxicity, heavy metals, autoimmunity, and EDS/hypermobility',
        'Medicinal mushrooms and herbs to support detoxification and health',
        'Supplements to protect the brain and organs, boost metabolism and mitochondrial function',
        'Support for burnout recovery, including addressing moral injury and work-life balance',
        'Ehlers Danlos Syndrome/hypermobility support and education',
        'Heavy metal detoxification strategies tailored to individual tolerance and needs',
        'Gut health optimization and food intolerance identification',
        'Stress management, self-care practices, and lifestyle modifications',
        'Cold-press juicing, alkaline water, and hydration strategies',
        'Metabolic support and mitochondrial function optimization',
        'Accountability coaching to help maintain changes and troubleshoot challenges',
        'Free resources including guides on MRI contrast toxicity and self-care activities',
      ],
      howToReach:
        'Website: https://thefoodphoenix.co.uk/ | Contact & Free Clarity Call: https://thefoodphoenix.co.uk/contact-me/ | Dr. Walsh is based in Belfast and Mid Ulster, Northern Ireland, and works with clients worldwide through remote consultations. She offers a free 30-minute discovery call to discuss your health needs. She is also co-creating a group coaching experience for professionals suffering from or at risk of burnout.',
      book: {
        title: 'Contrasts: More than meets the MRI',
        image: '/moremri.jpg',
        description:
          'For detailed information about MRI contrast toxicity, including how MRI contrast can contribute to feeling run-down, burnt-out, unwell, hopeless, and in pain, refer to Dr. Walsh\'s book. Her own experiences recovering from MRI contrast toxicity, combined with her medical training and education in nutrition and lifestyle coaching, place her in a unique position to understand the science behind gadolinium toxicity and provide powerful, natural strategies to help combat it.',
        link: 'https://amzn.to/4oYo2da',
        linkText: 'View Dr. Walsh\'s Book',
      },
    },
  ];

  return (
    <section className='mb-32' aria-labelledby='doctors-heading'>
      <div className='text-center mb-20'>
        <h2
          id='doctors-heading'
          className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight'>
          Leading Medical Professionals
        </h2>
        <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed'>
          Expert care from specialists dedicated to gadolinium toxicity
          treatment
        </p>
      </div>
      <div className='space-y-20'>
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
