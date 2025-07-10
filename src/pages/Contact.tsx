import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building,
  User,
  MessageSquare,
  DollarSign,
  Globe
} from 'lucide-react';
import SEO from '../components/common/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    message: '',
    budget: '',
    targetCountries: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetRanges = [
    '100만원 미만',
    '100만원 - 500만원',
    '500만원 - 1,000만원',
    '1,000만원 - 3,000만원',
    '3,000만원 - 5,000만원',
    '5,000만원 이상'
  ];

  const countries = [
    '베트남', '일본', '태국', '싱가포르', '말레이시아', 
    '필리핀', '인도네시아', '대만', '홍콩', '중국'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 API 호출
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setIsSubmitting(false);
    
    // 폼 초기화
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      message: '',
      budget: '',
      targetCountries: []
    });
  };

  const handleCountryChange = (country: string) => {
    setFormData(prev => ({
      ...prev,
      targetCountries: prev.targetCountries.includes(country)
        ? prev.targetCountries.filter(c => c !== country)
        : [...prev.targetCountries, country]
    }));
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "굿딜파트너",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "0504-080-4769",
        "email": "sqdhs@naver.com",
        "contactType": "customer service",
        "availableLanguage": "Korean"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "자룡로 48번길, 44",
        "addressLocality": "창원시",
        "addressRegion": "경남",
        "addressCountry": "KR"
      }
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="무료 상담 신청 - 글로벌 진출의 꿈을 현실로"
        description="굿딜파트너와 함께 글로벌 진출의 꿈을 현실로 만들어보세요. 전문가와의 무료 상담으로 최적의 마케팅 전략을 수립하고 24시간 내 빠른 응답을 받으세요."
        keywords="무료 상담, 마케팅 상담, 글로벌 진출, 해외 마케팅, 굿딜파트너 연락처, 상담 신청, 마케팅 전략"
        ogTitle="굿딜파트너 무료 상담 - 글로벌 진출을 위한 첫 걸음"
        ogDescription="전문가와의 무료 상담으로 글로벌 마케팅 성공 전략을 수립하세요. 24시간 내 빠른 응답 보장."
        canonicalUrl="https://www.gooddealpartners.com/contact"
        jsonLd={contactJsonLd}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              무료 상담 신청
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              글로벌 진출의 꿈을 현실로 만들어보세요. 
              전문가와의 상담으로 최적의 마케팅 전략을 수립하세요.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              연락처 정보
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">전화번호</h3>
                  <p className="text-gray-600">0504-080-4769</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">이메일</h3>
                  <p className="text-gray-600">sqdhs@naver.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">주소</h3>
                  <p className="text-gray-600">
                    경남 창원시 의창구 자룡로 48번길, 44
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">운영시간</h3>
                  <p className="text-gray-600">
                    평일 09:00 - 18:00<br />
                    (토·일·공휴일 휴무)
                  </p>
                </div>
              </div>
            </div>

            {/* 빠른 응답 약속 */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-accent mb-2">빠른 응답 약속</h3>
              <p className="text-gray-600">
                문의를 주시면 <strong>24시간 이내</strong>에 담당자가 연락드립니다. 
                긴급한 상담이 필요하시면 전화로 직접 연락주세요.
              </p>
            </div>
          </motion.div>

          {/* 문의 양식 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                상담 신청하기
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 회사명 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    회사명 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                {/* 담당자명 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    담당자명 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="담당자명을 입력해주세요"
                  />
                </div>

                {/* 연락처 & 이메일 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      이메일 *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                {/* 마케팅 예산 범위 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    마케팅 예산 범위
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">예산 범위를 선택해주세요</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* 희망 진출 국가 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Globe className="w-4 h-4 inline mr-2" />
                    희망 진출 국가 (복수선택 가능)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {countries.map(country => (
                      <label key={country} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.targetCountries.includes(country)}
                          onChange={() => handleCountryChange(country)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">{country}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    문의 내용 *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="문의하실 내용을 자세히 적어주세요. 현재 마케팅 현황, 목표, 궁금한 점 등을 포함해주시면 더 정확한 상담이 가능합니다."
                  />
                </div>

                {/* 개인정보 처리방침 동의 */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    required
                    id="privacy"
                    className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. 
                    <span className="text-primary underline cursor-pointer">
                      (개인정보처리방침 보기)
                    </span>
                  </label>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>무료 상담 신청하기</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ 섹션 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              상담 전 궁금하신 점들을 미리 확인해보세요
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "상담비용이 있나요?",
                a: "초기 상담은 완전 무료입니다. 회사 현황과 목표를 파악한 후 맞춤형 제안서를 제공해드립니다."
              },
              {
                q: "어떤 업종이든 가능한가요?",
                a: "네, 모든 업종에 대응 가능합니다. 특히 K뷰티, 패션, F&B, IT 분야에서 풍부한 경험을 보유하고 있습니다."
              },
              {
                q: "프로젝트 기간은 얼마나 걸리나요?",
                a: "프로젝트 규모에 따라 3-6개월이 일반적이며, 긴급한 경우 1개월 내 런칭도 가능합니다."
              },
              {
                q: "성과를 보장할 수 있나요?",
                a: "과거 95%의 프로젝트 성공률을 기록하고 있으며, 명확한 KPI 설정과 단계별 성과 측정을 통해 목표 달성을 지원합니다."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Q. {faq.q}</h3>
                <p className="text-gray-600">A. {faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 