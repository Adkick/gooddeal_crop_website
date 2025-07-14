import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  canonicalUrl?: string
  jsonLd?: object
}

const defaultSEO = {
  title: '굿딜파트너 - 글로벌 마케팅 전문 법인',
  description: '한국을 넘어 민간 KOTRA를 꿈꾸는 글로벌 광고 업계의 해답. AI 기반 디지털 마케팅 솔루션으로 해외 진출을 성공시킵니다.',
  keywords: '굿딜파트너, 굿딜 파트너, gooddeal, gooddeal partner, GoodDeal Partners, gooddealpartner, good deal partner, Good Deal Partner, 굿딜파트너스, 민간 KOTRA, 민간 코트라, 민간kotra, 디지털 마케팅, 해외 진출, AI 광고, AddKick, 아시아 마케팅, 글로벌 마케팅, KOTRA, 광고 대행사, 성과 기반 마케팅, 마케팅 대행, 해외 마케팅, 수출 마케팅, 글로벌 진출, 아시아 진출, 마케팅 컨설팅',
  ogImage: '/gooddeal_logo.png',
  ogUrl: 'https://gooddealpartner.com'
}

export default function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogTitle,
  ogDescription,
  ogImage = defaultSEO.ogImage,
  ogUrl = defaultSEO.ogUrl,
  twitterTitle,
  twitterDescription,
  canonicalUrl,
  jsonLd
}: SEOProps) {
  const fullTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title
  const finalOgTitle = ogTitle || title || defaultSEO.title
  const finalOgDescription = ogDescription || description
  const finalTwitterTitle = twitterTitle || finalOgTitle
  const finalTwitterDescription = twitterDescription || description

  return (
    <Helmet>
      {/* 기본 메타태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GoodDeal Partners" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="굿딜파트너" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
} 