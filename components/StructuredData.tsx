type StructuredDataProps = {
  pathname?: string;
  pageTitle?: string;
  pageDescription?: string;
};

const StructuredData = ({
  pathname = '/',
  pageTitle,
  pageDescription,
}: StructuredDataProps) => {
  const baseUrl = 'https://gadolinium.org';
  const currentUrl = `${baseUrl}${pathname}`;
  const title = pageTitle || 'Gadolinium Toxicity Resources';
  const description =
    pageDescription ||
    'Comprehensive resource guide for those affected by gadolinium toxicity, featuring leading medical professionals, treatment options, and support communities';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Gadolinium.org',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.svg`,
        },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Gadolinium Toxicity Resources',
        description:
          'Comprehensive resource guide for gadolinium toxicity. Find leading medical professionals, chelation clinics, and support communities.',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/clinics?search={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'MedicalCondition',
        '@id': `${baseUrl}/#condition`,
        name: 'Gadolinium Toxicity',
        alternateName: [
          'Gadolinium Deposition Disease',
          'GDD',
          'Gadolinium-Based Contrast Agent Toxicity',
          'MRI Contrast Toxicity',
        ],
        description:
          'Adverse health effects from gadolinium-based contrast agents (GBCAs) used in MRI scans, including gadolinium retention in tissues and associated symptoms.',
        category: 'Toxicology',
        associatedAnatomy: {
          '@type': 'AnatomicalStructure',
          name: 'Brain, Bone, Skin, Connective Tissues',
        },
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${currentUrl}#webpage`,
        url: currentUrl,
        name: title,
        description: description,
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        about: {
          '@id': `${baseUrl}/#condition`,
        },
        mainEntity: {
          '@id': `${baseUrl}/#condition`,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl,
            },
            ...(pathname && pathname !== '/'
              ? [
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: pathname
                      .split('/')
                      .pop()
                      ?.replace(/-/g, ' ')
                      .replace(/\b\w/g, (l) => l.toUpperCase()) || '',
                    item: currentUrl,
                  },
                ]
              : []),
          ],
        },
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

