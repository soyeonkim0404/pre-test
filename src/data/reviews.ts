import type { Review } from "@/types/review";

const productNames = [
  "AirPods Pro",
  "아이폰 16 Pro",
  "갤럭시 S24 Ultra",
  "맥북 프로 14",
  "아이패드 에어",
  "갤럭시 워치 6",
  "에어팟 맥스",
  "삼성 갤럭시 버즈",
  "소니 WH-1000XM5",
  "다이슨 에어랩",
  "LG 그램 17",
  "삼성 스마트 TV",
  "닌텐도 스위치",
  "플레이스테이션 5",
  "Xbox 시리즈 X",
  "로지텍 MX 마스터 3",
  "애플 워치 울트라",
  "삼성 프리즘",
  "LG 트롬 세탁기",
  "다이슨 V15",
  "로보락 S8",
  "네스프레소 버츄오",
  "필립스 휴",
  "브라운 전기면도기",
  "파나소닉 나노케어",
];

const authors = [
  "김소연",
  "이민준",
  "박서연",
  "최지훈",
  "정유나",
  "강현우",
  "조수빈",
  "윤도현",
  "임하은",
  "한지민",
  "오승호",
  "신예진",
  "권민서",
  "황준영",
  "송지아",
  "배성민",
  "서유리",
  "김태현",
  "이수진",
  "박준혁",
  "최예린",
  "정민호",
  "강서현",
  "조현우",
  "윤서아",
];

const reviewContents = [
  "너무 좋아요",
  "가성비 최고입니다!",
  "기대 이상이에요",
  "배송도 빠르고 만족스러워요",
  "품질이 정말 좋네요",
  "다음에도 또 구매할게요",
  "친구들한테 추천했어요",
  "설명대로 정확해요",
  "사용하기 편해요",
  "가격 대비 훌륭합니다",
  "디자인이 예쁘고 실용적이에요",
  "오래 써도 상태가 좋아요",
  "A/S도 친절하게 해주셨어요",
  "포장이 꼼꼼해서 좋았어요",
  "기능이 다양해서 유용해요",
  "무난하게 잘 쓰고 있어요",
  "처음엔 고민했는데 만족합니다",
  "리뷰 보고 샀는데 후회 없어요",
  "사이즈 딱 맞아요",
  "색상이 예쁘게 나왔어요",
  "조용해서 좋아요",
  "배터리 오래 가요",
  "화질/음질 모두 만족",
  "사용법이 간단해요",
  "가벼워서 휴대하기 좋아요",
  "충전이 빨라요",
  "앱 연동이 잘 돼요",
  "소음이 적어요",
  "세척이 편해요",
  "내구성이 좋아 보여요",
  "선물로 줬는데 좋아했어요",
  "실제로 보니 더 예뻐요",
  "예상보다 훨씬 좋아요",
  "매일 쓰는데 아직도 새 것 같아요",
  "가성비 최고! 강추합니다",
  "다른 제품보다 나은 것 같아요",
  "사용감이 부드러워요",
  "크기가 적당해요",
  "색감이 마음에 들어요",
  "성능이 뛰어나요",
  "설치가 쉬웠어요",
  "고급스러운 느낌이에요",
  "실용적이고 깔끔해요",
  "오래 찾던 제품이에요",
  "만족도 100%입니다",
  "재구매 의사 있어요",
  "이 가격에 이 퀄리티면 대박",
  "주변에 추천 많이 했어요",
  "사용 후기 남깁니다. 좋아요!",
  "기대했던 대로예요",
];

function randomDate(start: Date, end: Date): string {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomReviews(count: number): Review[] {
  const startDate = new Date("2025-01-01");
  const endDate = new Date("2026-03-11");

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    productName:
      productNames[Math.floor(Math.random() * productNames.length)] ?? "",
    rating: Math.floor(Math.random() * 5) + 1,
    author: authors[Math.floor(Math.random() * authors.length)] ?? "",
    content:
      reviewContents[Math.floor(Math.random() * reviewContents.length)] ?? "",
    createdAt: randomDate(startDate, endDate),
  }));
}

export const reviews: Review[] = (() => {
  const data = getRandomReviews(50);
  return shuffleArray(data).map((review, index) => ({
    ...review,
    id: index + 1,
  }));
})();
