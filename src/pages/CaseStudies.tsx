import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Filter, 
  Search, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  Star
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    country: '🇻🇳',
    countryName: '베트남',
    company: 'K뷰티 브랜드 B사',
    industry: '스킨케어',
    duration: '4개월',
    brandGrowth: '+340%',
    salesGrowth: '+280%',
    roas: '450%',
    description: '베트남 현지 틱톡 인플루언서 15명과의 협업을 통해 K뷰티 브랜드의 인지도와 매출을 크게 향상시킨 성공 사례입니다.',
    challenges: ['현지 문화 이해 부족', '언어 장벽', '신뢰할 만한 인플루언서 발굴'],
    solutions: ['현지 전문가 파트너십', '문화 적응형 콘텐츠', 'AI 기반 인플루언서 매칭'],
    results: ['브랜드 인지도 340% 증가', '온라인 매출 280% 증가', 'ROAS 450% 달성'],
    testimonial: '굿딜파트너 덕분에 베트남 시장에서 예상보다 훨씬 빠른 성과를 거둘 수 있었습니다.',
    tags: ['인플루언서', '틱톡', 'K뷰티', '베트남']
  },
  {
    id: 2,
    country: '🇯🇵',
    countryName: '일본',
    company: '패션 브랜드 M사',
    industry: '여성의류',
    duration: '6개월',
    brandGrowth: '+250%',
    salesGrowth: '+320%',
    roas: '380%',
    description: '일본 유튜브 패션 채널과의 협업으로 한국 패션 브랜드가 일본 시장에서 성공적으로 자리잡은 사례입니다.',
    challenges: ['높은 품질 기준', '경쟁 심화', '브랜드 차별화'],
    solutions: ['프리미엄 포지셔닝', '독창적 디자인 강조', '스토리텔링 마케팅'],
    results: ['팔로워 250% 증가', '웹사이트 방문 320% 증가', 'ROAS 380% 달성'],
    testimonial: '일본 고객들의 높은 기준을 만족시키는 마케팅 전략을 제공해주었습니다.',
    tags: ['유튜브', '패션', '일본', '브랜딩']
  },
  {
    id: 3,
    country: '🇹🇭',
    countryName: '태국',
    company: '레스토랑 체인 R사',
    industry: '프랜차이즈',
    duration: '3개월',
    brandGrowth: '+180%',
    salesGrowth: '+220%',
    roas: '290%',
    description: '태국 현지 푸드 인플루언서들과의 협업으로 한식 레스토랑 체인의 현지 진출을 성공시킨 사례입니다.',
    challenges: ['현지 입맛 적응', '위치 마케팅', '음식 트렌드 파악'],
    solutions: ['현지화 메뉴 개발', '지역별 맞춤 마케팅', '트렌드 선도 전략'],
    results: ['매장 방문 180% 증가', '주문량 220% 증가', 'ROAS 290% 달성'],
    testimonial: '현지 문화를 깊이 이해한 마케팅으로 빠른 정착이 가능했습니다.',
    tags: ['푸드', '레스토랑', '태국', '현지화']
  },
  {
    id: 4,
    country: '🇸🇬',
    countryName: '싱가포르',
    company: '헬스케어 H사',
    industry: '건강식품',
    duration: '5개월',
    brandGrowth: '+400%',
    salesGrowth: '+350%',
    roas: '420%',
    description: '싱가포르 헬스케어 시장에서 건강식품 브랜드가 프리미엄 포지셔닝으로 성공한 사례입니다.',
    challenges: ['규제 준수', '신뢰도 구축', '프리미엄 이미지'],
    solutions: ['전문가 인증', '과학적 근거 제시', '고급화 전략'],
    results: ['브랜드 검색 400% 증가', '온라인 판매 350% 증가', 'ROAS 420% 달성'],
    testimonial: '전문적이고 신뢰할 수 있는 마케팅 접근법이 인상적이었습니다.',
    tags: ['헬스케어', '건강식품', '싱가포르', '프리미엄']
  },
  {
    id: 5,
    country: '🇲🇾',
    countryName: '말레이시아',
    company: 'IT 스타트업 T사',
    industry: '모바일 앱',
    duration: '4개월',
    brandGrowth: '+500%',
    salesGrowth: '+380%',
    roas: '350%',
    description: '말레이시아에서 모바일 앱의 사용자 확보와 활성화를 통해 빠른 성장을 이룬 스타트업 사례입니다.',
    challenges: ['앱 인지도', '사용자 확보', '경쟁 앱 대비 차별화'],
    solutions: ['바이럴 마케팅', '인플루언서 체험', '기능 차별화 홍보'],
    results: ['앱 다운로드 500% 증가', '활성 사용자 380% 증가', 'ROAS 350% 달성'],
    testimonial: '스타트업에게 필요한 빠른 성장을 실현시켜준 최고의 파트너입니다.',
    tags: ['모바일앱', 'IT', '말레이시아', '스타트업']
  }
]

const countries = ['전체', '베트남', '일본', '태국', '싱가포르', '말레이시아']
const industries = ['전체', '스킨케어', '여성의류', '프랜차이즈', '건강식품', '모바일 앱']

export default function CaseStudies() {
  const [selectedCountry, setSelectedCountry] = useState('전체')
  const [selectedIndustry, setSelectedIndustry] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCases = caseStudies.filter(caseStudy => {
    const matchesCountry = selectedCountry === '전체' || caseStudy.countryName === selectedCountry
    const matchesIndustry = selectedIndustry === '전체' || caseStudy.industry === selectedIndustry
    const matchesSearch = caseStudy.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCountry && matchesIndustry && matchesSearch
  })

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 text-gray-900 mb-6">
              검증된 <span className="text-primary">성과 사례</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              굿딜파트너와 함께 성공을 이룬 고객들의 실제 성과를 확인해보세요.
              데이터로 증명된 성공 스토리를 통해 여러분의 미래를 그려보세요.
            </p>

            {/* 종합 성과 리포트 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">프로젝트 성공률</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl font-bold text-accent mb-2">300%</div>
                <div className="text-gray-600">평균 ROI</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl font-bold text-primary mb-2">47개</div>
                <div className="text-gray-600">성공 브랜드</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* 검색 */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="브랜드명, 업종으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* 필터 */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 결과 개수 */}
          <div className="mt-4 text-gray-600">
            {filteredCases.length}개의 성과 사례를 찾았습니다.
          </div>
        </div>
      </section>

      {/* 사례 목록 */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* 헤더 */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{caseStudy.country}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {caseStudy.company}
                        </h3>
                        <p className="text-gray-600">{caseStudy.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                  </div>

                  {/* 성과 지표 */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">
                        {caseStudy.brandGrowth}
                      </div>
                      <div className="text-xs text-gray-600">브랜드 인지도</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xl font-bold text-green-600">
                        {caseStudy.salesGrowth}
                      </div>
                      <div className="text-xs text-gray-600">매출 증가</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-xl font-bold text-purple-600">
                        {caseStudy.roas}
                      </div>
                      <div className="text-xs text-gray-600">ROAS</div>
                    </div>
                  </div>
                </div>

                {/* 내용 */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* 주요 결과 */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">주요 성과</h4>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* 고객 후기 */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900">고객 후기</span>
                    </div>
                    <p className="text-gray-600 italic">"{caseStudy.testimonial}"</p>
                  </div>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">검색 조건에 맞는 사례가 없습니다.</div>
              <button
                onClick={() => {
                  setSelectedCountry('전체')
                  setSelectedIndustry('전체')
                  setSearchTerm('')
                }}
                className="btn-primary"
              >
                필터 초기화
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              다음 성공 사례의 주인공이 되어보세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              검증된 전략과 전문성으로 여러분의 비즈니스도 
              이와 같은 성과를 거둘 수 있습니다.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              무료 상담 받기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 