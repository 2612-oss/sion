// ══════════════════════════════════════════════
// 원소 데이터베이스
// ══════════════════════════════════════════════
const NO_FLAME   = "불꽃에 넣어도 뚜렷한 불꽃색이 나타나지 않았어요.";
const NO_MAGNET  = "자석을 가까이 대도 끌려오지 않았어요. 자석에 붙는 금속은 철·니켈·코발트 등 일부뿐이에요.";
const NO_ACID    = "묽은 염산을 부어도 아무 변화가 없었어요. 염산과 반응하지 않는 금속이에요.";
const ACID_BUBBLE = "묽은 염산을 붓자 기포가 올라왔어요. 수소 기체가 생긴 거예요.";
const elementDatabase = [
    { name:"나트륨", symbol:"Na", num:11, flame:"노란색",   type:"금속",     state:"고체", family:"알칼리 금속",   density:[0.97,"g/cm³"], lab:{flame_kit:"선명한 노란색 불꽃이 나타났어요."}, desc:"칼로 잘릴 만큼 무른 은백색 금속이에요. 물과 만나면 격렬하게 반응해서 석유 속에 보관해요.", fact:"주황빛 노란색으로 빛나는 터널 조명 중에는 나트륨 램프가 있어요. 소금(염화나트륨)에도 들어 있어요." },
    { name:"칼륨",  symbol:"K",  num:19, flame:"보라색",   type:"금속",     state:"고체", family:"알칼리 금속",   density:[0.86,"g/cm³"], lab:{flame_kit:"연한 보라색 불꽃이 나타났어요."}, desc:"나트륨보다 더 무르고 반응성이 큰 금속이에요. 물에 닿으면 불꽃을 내며 격렬하게 반응해요.", fact:"바나나와 감자에 많이 들어 있고, 우리 몸의 신경과 근육이 움직이는 데 꼭 필요해요." },
    { name:"리튬",  symbol:"Li", num:3,  flame:"빨간색",   type:"금속",     state:"고체", family:"알칼리 금속",   density:[0.53,"g/cm³"], lab:{flame_kit:"빨간색 불꽃이 나타났어요."}, desc:"모든 금속 중 가장 가벼워서 기름보다도 가벼워요. 물에 뜰 만큼 밀도가 낮아요.", fact:"스마트폰과 전기차 배터리인 리튬 이온 전지의 핵심 재료예요." },
    { name:"구리",  symbol:"Cu", num:29, flame:"청록색",   type:"금속",     state:"고체", family:"전이 금속",     density:[8.96,"g/cm³"], acid:false, lab:{flame_kit:"청록색 불꽃이 나타났어요.", chemical_bag:NO_ACID, physics_tools:NO_MAGNET}, desc:"붉은빛이 도는 금속이에요. 전기가 잘 통해서 전선과 동전에 많이 써요.", fact:"오래된 구리는 푸른 녹색(녹청)으로 변해요. 자유의 여신상이 초록색인 이유예요." },
    { name:"칼슘",  symbol:"Ca", num:20, flame:"주황색",   type:"금속",     state:"고체", family:"알칼리 토금속", density:[1.55,"g/cm³"], acid:true,  lab:{flame_kit:"주황색(벽돌색) 불꽃이 나타났어요.", chemical_bag:ACID_BUBBLE, physics_tools:NO_MAGNET}, desc:"뼈와 치아를 이루는 주성분이에요. 불꽃 반응에서 주황색을 내요.", fact:"우유와 멸치에 많고, 조개껍데기와 달걀 껍데기도 칼슘 화합물이에요." },
    { name:"바륨",  symbol:"Ba", num:56, flame:"황록색",   type:"금속",     state:"고체", family:"알칼리 토금속", density:[3.62,"g/cm³"], lab:{flame_kit:"황록색 불꽃이 나타났어요."}, desc:"황록색 불꽃 반응을 보이는 무거운 금속이에요.", fact:"위 X선 촬영 때 마시는 조영제는 황산바륨이에요." },
    { name:"스트론튬",symbol:"Sr",num:38,flame:"진빨간색", type:"금속",     state:"고체", family:"알칼리 토금속", density:[2.64,"g/cm³"], lab:{flame_kit:"진한 빨간색(진홍색) 불꽃이 나타났어요."}, desc:"불꽃 반응에서 진한 빨간색을 내는 금속이에요.", fact:"리튬의 빨간색보다 더 짙고 어두운 진홍색이라서, 불꽃색 구별 문제에 자주 나와요." },
    { name:"염소",  symbol:"Cl", num:17, flame:"없음",     type:"비금속",   state:"기체", family:"할로젠",       density:[3.21,"g/L"],   discharge:"#bef264", lab:{neon_tester:"방전관이 연한 황록색으로 빛났어요."}, desc:"독성이 있는 황록색 기체예요. 수돗물과 수영장 소독에 쓰여요.", fact:"소금(염화나트륨)의 '염'이 바로 염소예요." },
    { name:"요오드",symbol:"I",  num:53, flame:"없음",     type:"비금속",   state:"고체", family:"할로젠",       density:[4.93,"g/cm³"], lab:{liquid_set:"녹말 용액을 떨어뜨리자 짙은 청람색으로 변했어요.", physics_tools:NO_MAGNET}, desc:"보라빛이 도는 검은 고체예요. 가열하면 바로 보라색 기체로 승화해요.", fact:"녹말과 만나면 청람색으로 변해요. 상처 소독약에도 들어 있어요." },
    { name:"철",    symbol:"Fe", num:26, flame:"없음",     type:"금속",     state:"고체", family:"전이 금속",     density:[7.87,"g/cm³"], acid:true, magnetic:true, lab:{flame_kit:NO_FLAME, chemical_bag:"묽은 염산을 붓자 천천히 기포가 올라왔어요.", physics_tools:"시료가 자석에 철썩 달라붙었어요!"}, desc:"자석에 붙는 대표적인 금속이에요.", fact:"우리 몸의 피(헤모글로빈)에도 철이 들어 있어서 산소를 나르는 데 도움을 줘요." },
    { name:"탄소",  symbol:"C",  num:6,  flame:"없음",     type:"비금속",   state:"고체", family:"비금속",       density:[2.26,"g/cm³"], lab:{flame_kit:"달궈도 뚜렷한 불꽃색 없이 붉게 달아오를 뿐이에요.", physics_tools:NO_MAGNET}, desc:"숯, 흑연, 다이아몬드로 존재하는 비금속이에요.", fact:"연필심(흑연)과 다이아몬드는 둘 다 탄소인데, 원자 배열이 달라서 성질이 전혀 달라요." },
    { name:"마그네슘",symbol:"Mg",num:12,flame:"없음",     type:"금속",     state:"고체", family:"알칼리 토금속", density:[1.74,"g/cm³"], acid:true, lab:{flame_kit:"눈부신 흰빛을 내며 탔지만 뚜렷한 색은 없었어요.", chemical_bag:ACID_BUBBLE, physics_tools:NO_MAGNET}, desc:"가볍고 은백색인 금속이에요. 불을 붙이면 눈부신 흰빛을 내며 타요.", fact:"식물의 초록색 색소인 엽록소 한가운데에 마그네슘이 들어 있어요." },
    { name:"아연",  symbol:"Zn", num:30, flame:"없음",     type:"금속",     state:"고체", family:"금속",         density:[7.14,"g/cm³"], acid:true, lab:{flame_kit:NO_FLAME, chemical_bag:ACID_BUBBLE, physics_tools:NO_MAGNET}, desc:"푸른빛이 도는 은백색 금속이에요. 아연 도금과 건전지에 쓰여요.", fact:"양철 지붕이나 가드레일이 오래 가는 것은 표면에 아연 도금을 했기 때문이에요." },
    { name:"헬륨",  symbol:"He", num:2,  flame:"없음",     type:"비활성 기체", state:"기체", family:"비활성 기체", density:[0.18,"g/L"],  discharge:"#fbbf77", lab:{neon_tester:"방전관이 분홍빛 도는 옅은 노란색으로 빛났어요."}, desc:"수소 다음으로 가벼운 기체예요. 다른 물질과 거의 반응하지 않아요.", fact:"헬륨 풍선이 공기 중에 둥둥 떠오르는 이유는 공기보다 훨씬 가볍기 때문이에요." },
    { name:"수소",  symbol:"H",  num:1,  flame:"없음",     type:"비금속",   state:"기체", family:"비금속",       density:[0.09,"g/L"],   discharge:"#f472b6", lab:{neon_tester:"방전관이 분홍빛 도는 보라색으로 빛났어요."}, desc:"가장 가볍고 우주에서 가장 흔한 원소예요.", fact:"수소가 타면 물만 생겨서, 수소 자동차는 배기가스 대신 물을 내보내요." },
    { name:"산소",  symbol:"O",  num:8,  flame:"없음",     type:"비금속",   state:"기체", family:"비금속",       density:[1.43,"g/L"],   discharge:"#d8b4fe", lab:{neon_tester:"방전관이 옅은 라일락색으로 빛났어요."}, desc:"공기의 약 21%를 차지해요. 다른 물질이 타는 것을 도와주는 조연성 기체예요.", fact:"우리가 마시는 산소는 대부분 식물과 플랑크톤이 광합성으로 만들어 낸 거예요." },
    { name:"질소",  symbol:"N",  num:7,  flame:"없음",     type:"비금속",   state:"기체", family:"비금속",       density:[1.25,"g/L"],   discharge:"#e879f9", lab:{neon_tester:"방전관이 자줏빛 도는 분홍색으로 빛났어요."}, desc:"공기의 약 78%를 차지하는 기체예요.", fact:"과자 봉지에 질소를 채우면 과자가 부서지지 않고 쉽게 상하지 않아요." },
    { name:"황",    symbol:"S",  num:16, flame:"파란색",   type:"비금속",   state:"고체", family:"비금속",       density:[2.07,"g/cm³"], lab:{flame_kit:"푸른 불꽃을 내며 탔어요. 코를 찌르는 냄새가 나는 기체가 생겼어요.", physics_tools:NO_MAGNET}, desc:"노란색 고체로 화산 근처에서 볼 수 있어요.", fact:"성냥 머리와 화약에 들어 있고, 고무를 단단하게 만드는 데도 써요." },
    { name:"은",    symbol:"Ag", num:47, flame:"없음",     type:"금속",     state:"고체", family:"전이 금속",     density:[10.49,"g/cm³"],acid:false, lab:{flame_kit:NO_FLAME, chemical_bag:NO_ACID, physics_tools:NO_MAGNET}, desc:"전기와 열이 모든 금속 중에서 가장 잘 통해요.", fact:"은수저가 검게 변하는 것은 공기 중의 황 성분과 반응해서예요." },
    { name:"금",    symbol:"Au", num:79, flame:"없음",     type:"금속",     state:"고체", family:"전이 금속",     density:[19.3,"g/cm³"], acid:false, lab:{flame_kit:NO_FLAME, chemical_bag:NO_ACID, physics_tools:NO_MAGNET}, desc:"노란빛 광택이 나는 금속이에요. 대부분의 산에 반응하지 않아요.", fact:"금 1g은 두드려서 약 1m²까지 얇게 펼 수 있어요." },
    { name:"알루미늄",symbol:"Al",num:13,flame:"없음",     type:"금속",     state:"고체", family:"금속",         density:[2.70,"g/cm³"], acid:true, lab:{flame_kit:NO_FLAME, chemical_bag:ACID_BUBBLE, physics_tools:NO_MAGNET}, desc:"가볍고 가공하기 쉬운 은백색 금속이에요.", fact:"알루미늄 캔을 재활용하면 새로 만들 때보다 에너지를 약 95%나 아낄 수 있어요." },
    { name:"규소",  symbol:"Si", num:14, flame:"없음",     type:"비금속",   state:"고체", family:"준금속",       density:[2.33,"g/cm³"], lab:{flame_kit:"불꽃에 넣어도 타지 않고 특별한 색도 나타나지 않았어요.", physics_tools:NO_MAGNET}, desc:"지각에서 산소 다음으로 많은 원소예요.", fact:"컴퓨터와 스마트폰의 반도체 칩은 규소로 만들어요." },
    { name:"인",    symbol:"P",  num:15, flame:"없음",     type:"비금속",   state:"고체", family:"비금속",       density:[2.34,"g/cm³"], lab:{flame_kit:"토치를 가까이 대자 쉽게 불이 붙어 흰 연기를 냈어요.", physics_tools:NO_MAGNET}, desc:"성냥갑 옆면에는 적린이 쓰여요.", fact:"인은 우리 뼈와 DNA를 이루는 중요한 원소예요." },
    { name:"네온",  symbol:"Ne", num:10, flame:"없음",     type:"비활성 기체", state:"기체", family:"비활성 기체", density:[0.90,"g/L"],  discharge:"#fb6b3c", lab:{neon_tester:"방전관이 붉은 주황색으로 환하게 빛났어요."}, desc:"방전관에 넣고 전압을 걸면 붉은 주황빛으로 빛나요.", fact:"네온사인의 다른 색들은 아르곤 같은 기체나 형광 물질을 이용해요." },
    { name:"아르곤",symbol:"Ar", num:18, flame:"없음",     type:"비활성 기체", state:"기체", family:"비활성 기체", density:[1.78,"g/L"],  discharge:"#a78bfa", lab:{neon_tester:"방전관이 연보라색으로 빛났어요."}, desc:"공기의 약 0.9%를 차지하는 비활성 기체예요.", fact:"전구 안에 채워 두면 뜨거운 필라멘트가 타 버리지 않도록 보호해 줘요." }
];
elementDatabase.forEach(e => {
    e.range = e.num <= 18 ? "번호 1~18" : "번호 19이상";
    e.test  = [...Object.keys(e.lab), "density_meter"];
});
function labText(element, toolId) {
    if (toolId !== "density_meter") return element.lab[toolId];
    const [v, u] = element.density;
    if (element.state === "기체") return `밀도는 ${v} ${u}예요. ${v < 1.29 ? "공기(약 1.29 g/L)보다 가벼운 기체예요." : "공기보다 무거운 기체예요."}`;
    return `밀도는 ${v} ${u}예요. ${v < 1 ? "물(1 g/cm³)보다 가벼워요." : "물보다 무거워요."}`;
}
const toolLessons = {
    flame_kit:    "불꽃 반응: 금속 원소는 불꽃에서 가열되면 원소마다 정해진 색의 빛을 내요.",
    liquid_set:   "색깔 변화 반응: 요오드는 녹말을 만나면 청람색으로 변해서 서로를 찾아내는 데 쓰여요.",
    neon_tester:  "방전관: 기체에 높은 전압을 걸면 기체마다 다른 색의 빛을 내요. 네온사인이 바로 이 원리예요.",
    chemical_bag: "산과의 반응: 마그네슘·아연·철·알루미늄 같은 금속은 산과 만나면 수소 기체가 생겨 기포가 올라와요.",
    physics_tools:"자석 실험: 자석에 붙는 물질은 철, 니켈, 코발트 등 일부 금속뿐이에요.",
    density_meter:"밀도: 같은 부피일 때 얼마나 무거운지를 나타내요. 기체는 고체보다 밀도가 훨씬 작아요."
};
const clueATools = new Set(["flame_kit","liquid_set","neon_tester"]);
const clueBTools = new Set(["chemical_bag","physics_tools","density_meter"]);
const clueEligibleElements = elementDatabase.filter(e =>
    e.test.some(t => clueATools.has(t)) && e.test.some(t => clueBTools.has(t))
);
function pickSuspects(count=5) {
    const groups = new Map();
    clueEligibleElements.forEach(e => {
        const key = [e.flame, e.type, e.state, e.range].join("|");
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(e);
    });
    return [...groups.values()].sort(()=>0.5-Math.random()).slice(0,count)
        .map(g => g[Math.floor(Math.random()*g.length)]);
}
const flameOptions  = ["전체","노란색","보라색","빨간색","청록색","주황색","황록색","진빨간색","파란색","없음"];
const typeOptions   = ["전체","금속","비금속","비활성 기체"];
const stateOptions  = ["전체","고체","기체"];
const rangeOptions  = ["전체","번호 1~18","번호 19이상"];
let flameIndex=0, typeIndex=0, stateIndex=0, rangeIndex=0;
let currentSuspects=[], targetCriminal=null, inventory=[];
let eliminatedSuspects=new Set(), recordedClues={A:false,B:false};
let revealed={flame:null,type:null,state:null,range:null};
let wrongGuesses=[], selectedItems={piece:false,tool:null};
const roomDatabase = {
    desk:     { title:"🔬 중앙 실험대 내부 현장",       skinClass:"stage-desk",    deco:{text:"🖥️ 정밀 분광 분석 컴퓨터 모니터",       top:"40px",  left:"50px",  w:"220px", h:"80px" }, evidence:{item:"토치 & 니크롬선 세트",         id:"flame_kit",    text:"실험대 비커 뒤편에서 장비를 획득했습니다.",              top:"200px",left:"380px"} },
    cabinet:  { title:"🗄️ 시약 보관장 내부 현장",       skinClass:"stage-cabinet", deco:{text:"☣️ 유독물질 경고 표지판 보관함",        top:"30px",  left:"350px", w:"180px", h:"100px"}, evidence:{item:"과학 수사 시약 세트",           id:"chemical_bag", text:"시약장 최하단 밀폐실을 열어 특수 가방을 확보했습니다.",  top:"180px",left:"120px"} },
    sink:     { title:"🚰 개수대 세척실 내부 현장",      skinClass:"stage-sink",    deco:{text:"🧪 초순수 제조 장치 배관조",            top:"50px",  left:"200px", w:"250px", h:"90px" }, evidence:{item:"증류수 & 녹말 용액",            id:"liquid_set",   text:"세척대 바구니 내부에서 깨끗한 시약 통을 확보했습니다.",  top:"240px",left:"250px"} },
    shelf:    { title:"📦 기타 적재 선반 내부 현장",     skinClass:"stage-shelf",   deco:{text:"🗃️ 오래된 실험 데이터 기록 일지 박스", top:"120px", left:"60px",  w:"200px", h:"70px" }, evidence:{item:"물리 판별 장비 (자석/실린더)",  id:"physics_tools",text:"선반 맨 위 화물상자 틈새에서 장비함을 확보했습니다.",   top:"220px",left:"420px"} },
    darkroom: { title:"👁️‍🗨️ 암실 방전 시험실 내부 현장", skinClass:"stage-cabinet", deco:{text:"🎛️ 고전압 유도 코일 및 전류 제어반",  top:"50px",  left:"100px", w:"210px", h:"80px" }, evidence:{item:"진공 방전관 연동 칩셋",          id:"neon_tester",  text:"어두운 암실 계측기 뒤편에 숨겨진 장치를 수거했습니다.",  top:"210px",left:"330px"} },
    safe:     { title:"🔐 중앙 금고 보관함 내부 현장",   skinClass:"stage-shelf",   deco:{text:"🗖 중요 기밀 문서 보관 파쇄기",         top:"40px",  left:"260px", w:"170px", h:"90px" }, evidence:{item:"정밀 전자 저울 및 밀도계",      id:"density_meter",text:"금고 내부 이중 비밀 서랍 바닥에서 판정기를 획득했습니다.",top:"220px",left:"110px"} }
};
// ══════════════════════════════════════════════
// DOMContentLoaded
// ══════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
    const $ = id => document.getElementById(id);
    const titleScreen           = $('title-screen');
    const gameScreen            = $('game-screen');
    const startBtn              = $('start-btn');
    const notebookToggleBtn     = $('notebook-toggle-btn');
    const notebookModal         = $('notebook-modal');
    const experimentModal       = $('experiment-modal');
    const experimentTitle       = $('experiment-title');
    const experimentContent     = $('experiment-content');
    const experimentFeedback    = $('experiment-feedback');
    const experimentNotebookBtn = $('experiment-notebook-btn');
    const accuseModal           = $('accuse-modal');
    const accuseBtn             = $('accuse-btn');
    const combineBtn            = $('combine-btn');
    const logBox                = $('log-box');
    const inventoryList         = $('inventory-list');
    const accuseOptions         = $('accuse-options');
    const finalSubmitBtn        = $('final-submit-btn');
    const activeSymbolsDisplay  = $('active-symbols-display');
    const suspectSymbolsList    = $('suspect-symbols-list');
    const elementDetailContent  = $('element-detail-content');
    const resultModal           = $('result-modal');
    const resultBody            = $('result-body');
    const resultActionBtn       = $('result-action-btn');
    const dexBtn                = $('dex-btn');
    const dexModal              = $('dex-modal');
    const dexGrid               = $('dex-grid');
    const dexDetail             = $('dex-detail');
    const photoFrame1           = $('photo-frame-1');
    const photoFrame2           = $('photo-frame-2');
    const searchOverlay         = $('search-overlay');
    const searchSceneTitle      = $('search-scene-title');
    const roomVisualStage       = $('room-visual-stage');
    const exitRoomBtn           = $('exit-room-btn');

    // ── 장소 버튼 뱃지 갱신 ──
    function updateRoomBadges() {
        document.querySelectorAll('.interactive-object').forEach(btn => {
            const info = roomDatabase[btn.getAttribute('data-obj')];
            if (!info) return;
            const collected = inventory.some(i => i.id === info.evidence.id);
            btn.classList.toggle('has-item',  !collected);
            btn.classList.toggle('room-done',  collected);
        });
    }
    function initGame() {
        inventory          = [];
        selectedItems      = {piece:false, tool:null};
        eliminatedSuspects = new Set();
        recordedClues      = {A:false, B:false};
        revealed           = {flame:null, type:null, state:null, range:null};
        wrongGuesses       = [];
        combineBtn.disabled = true;
        accuseBtn.disabled  = true;
        flameIndex=0; typeIndex=0; stateIndex=0; rangeIndex=0;
        updateSliderUI();
        photoFrame1.innerHTML = `<span>파트 A 실험 대기 중</span>`;
        photoFrame2.innerHTML = `<span>파트 B 실험 대기 중</span>`;
        elementDetailContent.innerHTML = `후보를 누르면 원소 정보를 볼 수 있어요.`;
        elementDetailContent.className = "detail-content-placeholder";
        inventory.push({id:"criminal_piece", name:"⚠️ 범인의 유기 원소 파편"});
        logBox.innerHTML = `<p class="system-msg">중앙 실험대에서 토치를, 다른 장소에서 분석 장비를 찾아 파편을 실험하세요.</p>`;
        currentSuspects = pickSuspects(5);
        targetCriminal  = currentSuspects[Math.floor(Math.random()*currentSuspects.length)];
        updateInventoryUI();
        applySliderFilters();
        renderSuspectChecklist();
        updateRoomBadges();
    }
    function elementCardHTML(e) {
        return `
            <p class="element-name">🧪 ${e.name} <span>(${e.symbol})</span></p>
            <div class="element-facts">
                <span>원자 번호 <b>${e.num}번</b></span>
                <span>계열 <b>${e.family}</b></span>
                <span>상태 <b>${e.state}</b></span>
                <span>분류 <b>${e.type}</b></span>
                <span>불꽃색 <b>${e.flame}</b></span>
                <span>번호 구간 <b>${e.range.replace("번호 ","")}</b></span>
            </div>
            <details class="extra-info">
                <summary>이 원소 더 알아보기</summary>
                <p>${e.desc}</p>
                <p class="fun-fact">💡 ${e.fact}</p>
            </details>`;
    }
    window.showElementFeatures = function(symbol) {
        const el = elementDatabase.find(e => e.symbol === symbol);
        if (!el) return;
        elementDetailContent.className = "detail-content-active";
        elementDetailContent.innerHTML = elementCardHTML(el);
    };
    function renderSuspectChecklist() {
        const zone = $('suspect-checklist-zone'); if (!zone) return;
        zone.innerHTML = '';
        currentSuspects.forEach(elem => {
            const label = document.createElement('label'); label.className = 'check-item';
            label.addEventListener('click', e => {
                if (e.target.type !== 'checkbox') { e.preventDefault(); showElementFeatures(elem.symbol); }
            });
            const cb = document.createElement('input'); cb.type = 'checkbox';
            cb.checked = eliminatedSuspects.has(elem.symbol);
            label.classList.toggle('checked', cb.checked);
            cb.addEventListener('change', () => {
                if (cb.checked) eliminatedSuspects.add(elem.symbol);
                else eliminatedSuspects.delete(elem.symbol);
                label.classList.toggle('checked', cb.checked);
                applySliderFilters();
            });
            const span = document.createElement('span'); span.innerHTML = `🕵️ <b>${elem.symbol}</b> (${elem.name}) 제외`;
            label.appendChild(cb); label.appendChild(span); zone.appendChild(label);
        });
    }
    // ══════════════════════════════════════════
    // 손전등 수색 (증거 장비 아이템만)
    // ══════════════════════════════════════════
    const searchIcons = {flame_kit:"🔥", chemical_bag:"🧪", liquid_set:"💧", physics_tools:"🧲", neon_tester:"💡", density_meter:"⚖️"};
    let searchSession = 0;
    function openRoom(zoneId) {
        const roomInfo = roomDatabase[zoneId]; if (!roomInfo) return;
        const session  = ++searchSession;
        const tipEl    = $('room-tip'), hintEl = $('room-hint');
        tipEl.innerText = ''; hintEl.innerText = '';
        searchSceneTitle.innerText = roomInfo.title;
        roomVisualStage.className  = `room-visual-stage ${roomInfo.skinClass}`;
        roomVisualStage.innerHTML  = '';
        roomVisualStage.onpointermove = null; roomVisualStage.onpointerdown = null;
        searchOverlay.style.display = "block";
        const pct = (v, ref) => (parseFloat(v) / ref) * 100;
        const deco = document.createElement('div'); deco.className = 'room-furniture-deco'; deco.innerText = roomInfo.deco.text;
        deco.style.top    = `${pct(roomInfo.deco.top,350)}%`; deco.style.left  = `${pct(roomInfo.deco.left,600)}%`;
        deco.style.width  = `${pct(roomInfo.deco.w,600)}%`;   deco.style.height = `${pct(roomInfo.deco.h,350)}%`;
        roomVisualStage.appendChild(deco);
        const ev = roomInfo.evidence;
        if (inventory.some(i => i.id === ev.id)) {
            const msg = document.createElement('div');
            msg.style.cssText = "color:#8e8e93;font-size:1.1rem;text-align:center;padding-top:150px;font-weight:bold;";
            msg.innerText = "🔍 이 구역 조사 완료됨."; roomVisualStage.appendChild(msg); return;
        }
        const clamp = (v,lo,hi) => Math.max(lo,Math.min(hi,v));
        const evPos = {
            x: clamp(pct(parseFloat(ev.left)+24, 600), 8, 92),
            y: clamp(pct(parseFloat(ev.top)+20,  350), 12, 88)
        };
        // 증거 아이템 1개만 배치
        const items = [];
        const addItem = (icon, x, y) => {
            const el = document.createElement('div');
            el.className = 'search-item sparkle';
            el.innerHTML = `<span>${icon}</span>`;
            el.style.left = `${x}%`; el.style.top = `${y}%`;
            roomVisualStage.appendChild(el);
            items.push({el, p:0, done:false});
        };
        addItem(searchIcons[ev.id] || "📦", evPos.x, evPos.y);
        const cover = document.createElement('div'); cover.className = 'dark-cover';
        cover.style.setProperty('--lr', `${window.matchMedia('(pointer:coarse)').matches ? 100 : 85}px`);
        roomVisualStage.appendChild(cover);
        let light = {x:0, y:0};
        const setLight = (x,y) => { light={x,y}; cover.style.setProperty('--lx',`${x}px`); cover.style.setProperty('--ly',`${y}px`); };
        const r0 = roomVisualStage.getBoundingClientRect();
        setLight(r0.width/2, r0.height/2);
        const moveLight = ev2 => {
            const r = roomVisualStage.getBoundingClientRect();
            setLight(clamp(ev2.clientX-r.left,0,r.width), clamp(ev2.clientY-r.top,0,r.height));
        };
        roomVisualStage.onpointermove = moveLight;
        roomVisualStage.onpointerdown = moveLight;
        const startedAt = performance.now(); let last = startedAt; let hinted = false;
        const frame = now => {
            if (session !== searchSession || searchOverlay.style.display === 'none') return;
            const dt = Math.min(0.05,(now-last)/1000); last = now;
            const r  = roomVisualStage.getBoundingClientRect();
            items.forEach(item => {
                if (item.done) return;
                const ir = item.el.getBoundingClientRect();
                const d  = Math.hypot(ir.left+ir.width/2-(r.left+light.x), ir.top+ir.height/2-(r.top+light.y));
                item.p = clamp(item.p + (d < 48 ? dt/0.9 : -dt*1.5), 0, 1);
                item.el.style.setProperty('--p', `${item.p*360}deg`);
                if (item.p >= 1) {
                    item.done = true;
                    item.el.classList.add('done');
                    inventory.push({id:ev.id, name:ev.item});
                    addLog(`[현장 수색 성공] ${ev.text}`, "find-msg");
                    updateInventoryUI();
                    updateRoomBadges();
                    tipEl.innerText = `🎉 「${ev.item}」 발견! ${ev.text}`;
                    hintEl.innerText = '';
                }
            });
            if (!hinted && !items[0].done && now-startedAt > 12000) {
                hinted = true;
                const h = evPos.x < 33 ? "왼쪽" : evPos.x > 66 ? "오른쪽" : "가운데";
                const v = evPos.y < 33 ? "위"    : evPos.y > 66 ? "아래"   : "가운데";
                hintEl.innerText = `💡 힌트: 방의 ${h===v?"한가운데":h+" "+v} 쪽을 비춰 보세요.`;
            }
            requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    }
    document.querySelectorAll('.interactive-object').forEach(obj => {
        obj.addEventListener('click', () => openRoom(obj.getAttribute('data-obj')));
    });
    exitRoomBtn.addEventListener('click', () => { searchOverlay.style.display = "none"; updateRoomBadges(); });
    function updateInventoryUI() {
        inventoryList.innerHTML = '';
        inventory.forEach(item => {
            const div = document.createElement('div'); div.className = 'inventory-item';
            let sel = (item.id==="criminal_piece" && selectedItems.piece) || (selectedItems.tool && selectedItems.tool.id===item.id);
            div.style.border     = sel ? "2px solid #10b981" : "1px solid #334155";
            div.style.background = sel ? "#064e3b" : "";
            div.innerHTML = `${item.id==="criminal_piece"?"☣️":"🧪"} <span>${item.name}</span>`;
            div.addEventListener('click', () => toggleSelectItem(item));
            inventoryList.appendChild(div);
        });
    }
    function toggleSelectItem(item) {
        if (item.id==="criminal_piece") selectedItems.piece = !selectedItems.piece;
        else selectedItems.tool = (selectedItems.tool && selectedItems.tool.id===item.id) ? null : item;
        combineBtn.disabled = !(selectedItems.piece && selectedItems.tool);
        updateInventoryUI();
    }
    // ══════════════════════════════════════════
    // 실험 미니게임 공통
    // ══════════════════════════════════════════
    const FLAME_HEX = {"노란색":"#facc15","보라색":"#a855f7","빨간색":"#ef4444","진빨간색":"#b91c1c","파란색":"#3b82f6","청록색":"#14b8a6","주황색":"#f97316","황록색":"#a3e635","없음":"#bfdbfe"};
    const clamp    = (v,lo,hi) => Math.max(lo,Math.min(hi,v));
    const centerOf = el => { const r=el.getBoundingClientRect(); return {x:r.left+r.width/2, y:r.top+r.height/2}; };
    const bottomOf = el => { const r=el.getBoundingClientRect(); return {x:r.left+r.width/2, y:r.bottom-4}; };
    const dist     = (a,b) => Math.hypot(a.x-b.x, a.y-b.y);
    const inside   = (pt,el,pad=0) => { const r=el.getBoundingClientRect(); return pt.x>=r.left-pad&&pt.x<=r.right+pad&&pt.y>=r.top-pad&&pt.y<=r.bottom+pad; };
    const say      = msg => { if (experimentFeedback.innerText!==msg) experimentFeedback.innerText=msg; };
    const setProgress = (sc,p) => { const b=sc.querySelector('.exp-progress i'); if(b) b.style.width=`${Math.round(clamp(p,0,1)*100)}%`; };
    function makeDrag(item, {axis="xy"}={}) {
        let drag=null;
        item.addEventListener('pointerdown', e => {
            if (item.dataset.locked==="true") return;
            e.preventDefault(); item.setPointerCapture(e.pointerId);
            drag={px:e.clientX,py:e.clientY,left:item.offsetLeft,top:item.offsetTop};
            item.classList.add('is-dragging');
        });
        item.addEventListener('pointermove', e => {
            if (!drag||!item.hasPointerCapture(e.pointerId)) return;
            const s=item.offsetParent;
            if (axis!=="y") item.style.left=`${clamp(drag.left+e.clientX-drag.px,0,s.clientWidth-item.offsetWidth)}px`;
            if (axis!=="x") item.style.top=`${clamp(drag.top+e.clientY-drag.py,0,s.clientHeight-item.offsetHeight)}px`;
        });
        const end=()=>{drag=null;item.classList.remove('is-dragging');};
        item.addEventListener('pointerup',end); item.addEventListener('pointercancel',end);
    }
    function runScene(sc, tick) {
        let last=performance.now();
        const frame=now=>{
            if (!sc.isConnected||experimentModal.style.display==='none') return;
            const dt=Math.min(0.05,(now-last)/1000); last=now;
            if (tick(dt)===true) return;
            requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    }
    function finishScene(sc,tool,tc) {
        sc.querySelectorAll('.drag-item').forEach(el=>{el.dataset.locked="true";el.classList.remove('is-dragging');});
        setProgress(sc,1); triggerGameResult(tool,tc);
    }
    const experimentScenes = {
        flame_kit: {
            html:`<div class="experiment-scene flame-scene">
                    <p class="scene-instruction">토치를 버너 심지에 가까이 대 불을 붙이고, 니크롬선 끝을 불꽃 속에 넣어 달구세요.</p>
                    <div class="lab-burner"><div id="burner-wick" class="burner-wick"></div>버너</div>
                    <div id="flame" class="real-flame"><b></b><i></i></div>
                    <div id="torch-drag" class="drag-item torch-item" style="left:5%;top:58%;">🔥 토치</div>
                    <div id="wire-drag" class="drag-item wire-item is-dim" data-locked="true" style="left:8%;top:18%;"><span class="wire-label">시료 묻힌 니크롬선</span></div>
                    <div class="exp-progress"><i></i></div>
                  </div>`,
            init(sc,tool,tc){
                const torch=sc.querySelector('#torch-drag'),wire=sc.querySelector('#wire-drag');
                const wick=sc.querySelector('#burner-wick'),flame=sc.querySelector('#flame');
                flame.style.setProperty('--flame-color',FLAME_HEX[tc.flame]||'#bfdbfe');
                makeDrag(torch);makeDrag(wire);
                let ignite=0,heat=0,lit=false;
                runScene(sc,dt=>{
                    if(!lit){
                        const near=dist(centerOf(torch),centerOf(wick))<60;
                        ignite=clamp(ignite+(near?dt/0.9:-dt/1.5),0,1);
                        flame.style.setProperty('--flame-scale',String(ignite*0.45));
                        setProgress(sc,ignite*0.3);
                        say(near?"심지에 불이 붙는 중… 그대로 유지하세요.":"토치를 버너 심지에 가까이 대세요.");
                        if(ignite>=1){lit=true;flame.style.setProperty('--flame-scale','1');torch.dataset.locked="true";torch.style.left="5%";torch.style.top="70%";wire.dataset.locked="false";wire.classList.remove('is-dim');setProgress(sc,0);addLog("버너에 불이 붙었습니다. 니크롬선을 불꽃에 넣으세요.","system-msg");}
                    } else {
                        const inFlame=inside(bottomOf(wire),flame,6);
                        heat=clamp(heat+(inFlame?dt/2:-dt/3),0,1);
                        flame.style.setProperty('--heat',String(heat)); setProgress(sc,heat);
                        say(inFlame?"시료가 달궈지며 불꽃색이 변하는 중…":"니크롬선 끝을 불꽃 한가운데에 넣으세요.");
                        if(heat>=1){finishScene(sc,tool,tc);return true;}
                    }
                });
            }
        },
        liquid_set:{
            html:`<div class="experiment-scene liquid-scene">
                    <p class="scene-instruction">스포이트 끝을 녹말 용액에 담가 채운 뒤, 요오드 시료 비커 위에서 떨어뜨리세요.</p>
                    <div id="reagent-bottle" class="drop-target reagent-target liquid-host"><div class="beaker-liquid" style="--level:70%"></div><span>🧪 녹말 용액</span></div>
                    <div id="beaker" class="drop-target beaker-target liquid-host"><div id="beaker-liquid" class="beaker-liquid" style="--level:8%"></div><span>⚗️ 시료 비커</span></div>
                    <div id="pipette" class="drag-item pipette-item" style="left:5%;top:60%;">💧 스포이트<em class="pipette-fill"></em></div>
                    <div class="exp-progress"><i></i></div>
                  </div>`,
            init(sc,tool,tc){
                const pipette=sc.querySelector('#pipette'),bottle=sc.querySelector('#reagent-bottle');
                const beaker=sc.querySelector('#beaker'),liquid=sc.querySelector('#beaker-liquid');
                const fillBar=pipette.querySelector('.pipette-fill'); makeDrag(pipette);
                let fill=0,delivered=0;
                runScene(sc,dt=>{
                    const tip=bottomOf(pipette);
                    if(inside(tip,bottle,4)&&fill<1){fill=clamp(fill+dt*0.8,0,1);say("녹말 용액을 빨아올리는 중…");}
                    else if(inside(tip,beaker,4)){
                        if(fill>0){const a=Math.min(fill,dt*0.5);fill-=a;delivered+=a;say(delivered>0.3?"용액이 청람색으로 변하고 있어요!":"용액을 떨어뜨리는 중…");}
                        else{say("스포이트가 비었어요. 먼저 녹말 용액을 채우세요.");}
                    } else{say(fill>0.05?"용액이 채워졌어요. 비커 위로 옮기세요.":"스포이트 끝을 녹말 용액에 담그세요.");}
                    fillBar.style.setProperty('--fill',`${fill*100}%`);
                    liquid.style.setProperty('--level',`${8+delivered/0.8*55}%`);
                    liquid.classList.toggle('turned',delivered>0.3); setProgress(sc,delivered/0.8);
                    if(delivered>=0.8){finishScene(sc,tool,tc);return true;}
                });
            }
        },
        neon_tester:{
            html:`<div class="experiment-scene neon-scene">
                    <p class="scene-instruction">전원을 켜고 손잡이를 위로 끌어 80V 이상으로 유지하세요.</p>
                    <button id="neon-power" class="power-switch" type="button">⏻ 전원 켜기</button>
                    <div class="voltage-readout"><span id="neon-volt-txt">0</span><small>V</small></div>
                    <div id="voltage-rail" class="voltage-rail power-off">
                        <span class="voltage-mark mark-120">120V</span>
                        <span class="voltage-mark mark-80">80V</span>
                        <span class="voltage-mark mark-0">0V</span>
                        <div id="voltage-knob" class="drag-item voltage-knob" data-locked="true" style="left:50%;top:82%;">●</div>
                    </div>
                    <div id="tube-target" class="drop-target discharge-tube">💡 방전관</div>
                    <div class="exp-progress"><i></i></div>
                  </div>`,
            init(sc,tool,tc){
                const pw=sc.querySelector('#neon-power'),rail=sc.querySelector('#voltage-rail');
                const knob=sc.querySelector('#voltage-knob'),vt=sc.querySelector('#neon-volt-txt');
                const tube=sc.querySelector('#tube-target');
                let powerOn=false,hold=0;
                const hex=(tc.discharge||"#c084fc").replace("#","");
                const rgb=[0,2,4].map(i=>parseInt(hex.slice(i,i+2),16)).join(", ");
                makeDrag(knob,{axis:"y"});
                pw.addEventListener('click',()=>{powerOn=!powerOn;pw.innerText=powerOn?"⏻ 전원 끄기":"⏻ 전원 켜기";rail.classList.toggle('power-off',!powerOn);knob.dataset.locked=String(!powerOn);});
                const getV=()=>{const m=rail.clientHeight-knob.offsetHeight;return powerOn?clamp(Math.round(120*(1-knob.offsetTop/m)),0,120):0;};
                runScene(sc,dt=>{
                    const v=getV(); vt.innerText=String(v); rail.style.setProperty('--voltage-level',`${v/120*100}%`);
                    const glow=powerOn?clamp((v-30)/90,0,1)*(0.85+Math.random()*0.15):0;
                    tube.style.background=`rgba(${rgb},${0.12+glow*0.6})`; tube.style.boxShadow=`0 0 ${Math.round(glow*34)}px rgba(${rgb},${glow})`;
                    const enough=powerOn&&v>=80; hold=clamp(hold+(enough?dt/1.5:-dt/2),0,1); setProgress(sc,hold);
                    say(!powerOn?"먼저 전원을 켜세요.":enough?"방전관이 빛나요! 그대로 유지하세요.":"손잡이를 위로 올려 전압을 높이세요.");
                    if(hold>=1){rail.classList.add('tube-lit');finishScene(sc,tool,tc);return true;}
                });
            }
        },
        chemical_bag:{
            html:`<div class="experiment-scene chemical-scene">
                    <p class="scene-instruction">시료를 비커에 넣고, 묽은 염산을 비커 위로 기울여 따르세요.</p>
                    <div id="chem-beaker" class="drop-target chemical-beaker liquid-host"><div id="chem-liquid" class="beaker-liquid" style="--level:0%"></div><div class="bubbles"><s></s><s></s><s></s><s></s><s></s></div><span>⚗️ 반응 비커</span></div>
                    <div id="chem-sample" class="drag-item chemical-sample" style="left:5%;top:20%;">💎 시료</div>
                    <div id="chem-reagent" class="drag-item chemical-reagent is-dim" data-locked="true" style="left:5%;top:58%;">💧 묽은 염산</div>
                    <div class="exp-progress"><i></i></div>
                  </div>`,
            init(sc,tool,tc){
                const beaker=sc.querySelector('#chem-beaker'),liquid=sc.querySelector('#chem-liquid');
                const sample=sc.querySelector('#chem-sample'),reagent=sc.querySelector('#chem-reagent');
                makeDrag(sample);makeDrag(reagent);
                let stage=0,put=0,pour=0;
                runScene(sc,dt=>{
                    if(stage===0){
                        const near=inside(centerOf(sample),beaker,0); put=clamp(put+(near?dt/0.5:-dt/0.5),0,1);
                        say(near?"시료를 비커에 넣는 중…":"시료를 반응 비커 위로 옮기세요.");
                        if(put>=1){stage=1;sample.classList.add('is-hidden');sample.dataset.locked="true";beaker.classList.add('has-sample');reagent.dataset.locked="false";reagent.classList.remove('is-dim');liquid.style.setProperty('--level','18%');addLog("시료를 비커에 넣었습니다. 묽은 염산을 기울여 따르세요.","system-msg");}
                    } else {
                        const over=inside(centerOf(reagent),beaker,24); reagent.classList.toggle('is-pouring',over);
                        if(over){pour=clamp(pour+dt/1.8,0,1);if(tc.acid)beaker.classList.add('reaction-started');say(tc.acid?"묽은 염산을 따르는 중… 기포가 생기는지 보세요.":"묽은 염산을 따르는 중… 변화가 있는지 보세요.");}
                        else{say(pour>0?"계속 비커 위에서 따르세요.":"염산병을 비커 위로 옮기세요.");}
                        liquid.style.setProperty('--level',`${18+pour*50}%`); setProgress(sc,pour);
                        if(pour>=1){reagent.classList.remove('is-pouring');finishScene(sc,tool,tc);return true;}
                    }
                });
            }
        },
        physics_tools:{
            html:`<div class="experiment-scene magnet-scene">
                    <p class="scene-instruction">자석을 시료 쪽으로 천천히 가져가 반응을 관찰하세요.</p>
                    <div id="magnet-sample" class="drop-target magnet-sample">🔩<span>미지 시료</span></div>
                    <div id="magnet-drag" class="drag-item magnet-item" style="left:5%;top:36%;">🧲 자석</div>
                    <div class="exp-progress"><i></i></div>
                  </div>`,
            init(sc,tool,tc){
                const sample=sc.querySelector('#magnet-sample'),magnet=sc.querySelector('#magnet-drag');
                makeDrag(magnet); let hold=0,tx=0,ty=0;
                runScene(sc,dt=>{
                    const r=sample.getBoundingClientRect(); const rest={x:r.left+r.width/2-tx,y:r.top+r.height/2-ty};
                    const mc=centerOf(magnet); const d=Math.max(1,dist(mc,rest));
                    const pull=tc.magnetic?clamp(1-d/170,0,1):0;
                    tx=(mc.x-rest.x)/d*20*pull+(pull>0.4?(Math.random()-0.5)*3:0);
                    ty=(mc.y-rest.y)/d*20*pull+(pull>0.4?(Math.random()-0.5)*3:0);
                    sample.style.transform=`translate(${tx}px,${ty}px) rotate(${(Math.random()-0.5)*pull*14}deg)`;
                    hold=clamp(hold+(d<95?dt/1.2:-dt/2),0,1); setProgress(sc,hold);
                    say(tc.magnetic?(pull>0.05?"시료가 자석에 반응하고 있어요! 조금만 더 가까이.":"자석을 시료 쪽으로 천천히 가져가 보세요."):(d<95?"자석을 가까이 댔어요. 시료가 움직이는지 관찰하세요…":"자석을 시료 가까이 가져가 관찰하세요."));
                    if(hold>=1){finishScene(sc,tool,tc);return true;}
                });
            }
        },
        density_meter:{
            html:`<div class="experiment-scene density-scene">
                    <p class="scene-instruction">시료를 밀도계 접시에 올리고, 수치가 안정될 때까지 기다리세요.</p>
                    <div class="balance-display"><span id="balance-indicator">⚖️</span><b id="balance-readout">밀도 측정</b></div>
                    <div id="scale-pan" class="drop-target scale-pan">저울 접시</div>
                    <div id="density-sample" class="drag-item density-sample" style="left:6%;top:58%;">💎 시료</div>
                    <div class="exp-progress"><i></i></div>
                  </div>`,
            init(sc,tool,tc){
                const pan=sc.querySelector('#scale-pan'),sample=sc.querySelector('#density-sample');
                const readout=sc.querySelector('#balance-readout'),indicator=sc.querySelector('#balance-indicator');
                const [dens,unit]=tc.density; sample.innerText=tc.state==="기체"?"🫧 기체 시료병":"💎 시료";
                makeDrag(sample); let stable=0;
                runScene(sc,dt=>{
                    const on=inside(centerOf(sample),pan,10); stable=clamp(stable+(on?dt/2.2:-dt/0.6),0,1);
                    if(on){const sh=stable>=1?dens:Math.max(0,dens*(0.4+0.6*stable)+(Math.random()-0.5)*(1-stable)*dens*0.5);readout.innerText=`${sh.toFixed(2)} ${unit}`;}
                    else{readout.innerText=`0.00 ${unit}`;}
                    indicator.classList.toggle('balance-settled',stable>0.6); setProgress(sc,stable);
                    say(on?"저울 수치가 안정되길 기다리세요…":"시료를 저울 접시 위로 옮기세요.");
                    if(stable>=1){finishScene(sc,tool,tc);return true;}
                });
            }
        }
    };
    combineBtn.addEventListener('click',()=>{
        if (!selectedItems.piece||!selectedItems.tool) return;
        const tool=selectedItems.tool, tc=targetCriminal;
        const usableToolNames={flame_kit:"토치 & 니크롬선 세트",liquid_set:"증류수 & 녹말 용액",neon_tester:"진공 방전관 연동 칩셋",chemical_bag:"과학 수사 시약 세트",physics_tools:"물리 판별 장비 (자석/실린더)",density_meter:"정밀 전자 저울 및 밀도계"};
        if (!tc.test.includes(tool.id)) {
            const hints=tc.test.filter(id=>id!=="density_meter").map(id=>usableToolNames[id]||id);
            const hintStr=hints.length?`이 파편엔 <b>${hints.join(", ")}</b> 또는 <b>밀도계</b>를 써 보세요.`:"다른 장비를 확보하세요.";
            addLog(`[🔧 장비 불일치] "${tool.name}"은(는) 이 파편에 반응하지 않습니다.`,"hint-msg-wrong-tool");
            elementDetailContent.className="detail-content-active";
            elementDetailContent.innerHTML=`<div class="fail-hint-box"><span class="fail-icon">🔧</span><p class="fail-title">이 장비로는 분석할 수 없어요!</p><p class="fail-body">"${tool.name}"은(는) 이 파편에 반응하지 않는 장비예요.<br>${hintStr}</p><p class="fail-tip">💡 다른 구역을 수색해서 맞는 장비를 찾아 보세요.</p></div>`;
            return;
        }
        const cg=clueATools.has(tool.id)?"A":"B";
        if (recordedClues[cg]) {
            const doneL=cg==="A"?"불꽃색·분류 (단서 A)":"상태·번호 (단서 B)";
            const needL=cg==="A"?"상태·번호 (단서 B)":"불꽃색·분류 (단서 A)";
            addLog(`[✅ 단서 중복] 파트 ${cg} 단서는 이미 확보했어요.`,"hint-msg-already-done");
            elementDetailContent.className="detail-content-active";
            elementDetailContent.innerHTML=`<div class="done-hint-box"><span class="fail-icon">✅</span><p class="fail-title">이 단서는 이미 수첩에 있어요!</p><p class="fail-body"><b>${doneL}</b> 단서는 이미 확보했어요.<br>이제 <b>${needL}</b> 단서를 얻어야 범인을 지목할 수 있어요.</p><p class="fail-tip">📑 수첩을 열어서 이미 얻은 단서를 확인해 보세요.</p></div>`;
            return;
        }
        experimentTitle.innerText    = tool.name;
        experimentFeedback.innerText = "실험 순서에 따라 장비를 조작하세요.";
        experimentFeedback.className = "";
        experimentNotebookBtn.hidden = true;
        experimentModal.style.display = 'block';
        addLog(`${tool.name} 실험을 시작했습니다.`,"system-msg");
        elementDetailContent.className="detail-content-active";
        const sc=experimentScenes[tool.id];
        experimentContent.innerHTML=sc.html;
        sc.init(experimentContent.querySelector('.experiment-scene'),tool,tc);
        selectedItems={piece:false,tool:null}; combineBtn.disabled=true; updateInventoryUI();
    });
    function triggerGameResult(tool,tc){
        const cg=clueATools.has(tool.id)?"A":"B";
        if (recordedClues[cg]) return;
        recordedClues[cg]=true;
        addLog(`🎉 ${tool.name} 분析 완료!`,"react-msg");
        experimentFeedback.innerText="분석 완료! 수첩에서 단서에 맞게 후보를 좁혀 보세요.";
        experimentFeedback.className="experiment-feedback-success";
        experimentNotebookBtn.hidden=false;
        let html;
        if(cg==="A"){revealed.flame=tc.flame;revealed.type=tc.type;html=`<span class="result-clue">불꽃색 <b>${tc.flame}</b></span><span class="result-clue">분류 <b>${tc.type}</b></span>`;}
        else{revealed.state=tc.state;revealed.range=tc.range;html=`<span class="result-clue">상태 <b>${tc.state}</b></span><span class="result-clue">번호 <b>${tc.range.replace("번호 ","")}</b></span>`;}
        updateSliderUI(); applySliderFilters();
        accuseBtn.disabled=!(recordedClues.A&&recordedClues.B);
        elementDetailContent.className="detail-content-active";
        elementDetailContent.innerHTML=`<div class="result-card"><p class="result-title">🔬 단서 ${cg}를 찾았어요!</p><div class="result-clues">${html}</div><p class="result-text">${labText(tc,tool.id)}</p><details class="extra-info"><summary>🧠 과학 노트</summary><p>${toolLessons[tool.id]}</p></details></div>`;
        if(cg==="A"){const cx=FLAME_HEX[tc.flame]||"#a855f7";photoFrame1.innerHTML=`<div style="text-align:center;"><span style="font-size:2rem;color:${cx};text-shadow:0 0 10px ${cx};">🔬</span><br><b>[단서 A 확보]</b><br><span>불꽃색: ${tc.flame} · 분류: ${tc.type}</span></div>`;}
        else{photoFrame2.innerHTML=`<div style="text-align:center;"><span style="font-size:2rem;color:#10b981;">⚖️</span><br><b>[단서 B 확보]</b><br><span>상태: ${tc.state} · 번호: ${tc.range.replace("번호 ","")}</span></div>`;}
    }
    function addLog(text,className=""){
        const p=document.createElement('p'); if(className) p.className=className;
        p.innerText=text; logBox.appendChild(p); logBox.scrollTop=logBox.scrollHeight;
    }
    function updateSliderUI(){
        const mark=(k,opts,i)=>(revealed[k]&&revealed[k]===opts[i])?"✔ ":"";
        const label=(opts,i,s="")=>opts[i]==="전체"?"전체 보기":opts[i]+s;
        $('flame-value').innerText  = mark('flame',flameOptions,flameIndex) +label(flameOptions,flameIndex);
        $('prop-value').innerText   = mark('type',typeOptions,typeIndex)    +label(typeOptions,typeIndex);
        $('state-value').innerText  = mark('state',stateOptions,stateIndex) +label(stateOptions,stateIndex," 상태");
        $('period-value').innerText = mark('range',rangeOptions,rangeIndex) +label(rangeOptions,rangeIndex);
    }
    function applySliderFilters(){
        const active=getFilteredSuspects();
        activeSymbolsDisplay.innerText=active.length===0?"조건 일치 없음":active.map(e=>`${e.symbol}(${e.name})`).join(', ');
        suspectSymbolsList.innerHTML='';
        active.forEach(e=>{const c=document.createElement('div');c.className='element-chip';c.innerText=e.symbol;c.addEventListener('click',()=>showElementFeatures(e.symbol));suspectSymbolsList.appendChild(c);});
    }
    function getFilteredSuspects(){
        const sf=flameOptions[flameIndex],st=typeOptions[typeIndex],ss=stateOptions[stateIndex],sr=rangeOptions[rangeIndex];
        return currentSuspects.filter(e=>!eliminatedSuspects.has(e.symbol)&&(sf==="전체"||e.flame===sf)&&(st==="전체"||e.type===st)&&(ss==="전체"||e.state===ss)&&(sr==="전체"||e.range===sr));
    }
    [['flame-prev',()=>{flameIndex=(flameIndex-1+flameOptions.length)%flameOptions.length;}],
     ['flame-next',()=>{flameIndex=(flameIndex+1)%flameOptions.length;}],
     ['prop-prev', ()=>{typeIndex=(typeIndex-1+typeOptions.length)%typeOptions.length;}],
     ['prop-next', ()=>{typeIndex=(typeIndex+1)%typeOptions.length;}],
     ['state-prev',()=>{stateIndex=(stateIndex-1+stateOptions.length)%stateOptions.length;}],
     ['state-next',()=>{stateIndex=(stateIndex+1)%stateOptions.length;}],
     ['period-prev',()=>{rangeIndex=(rangeIndex-1+rangeOptions.length)%rangeOptions.length;}],
     ['period-next',()=>{rangeIndex=(rangeIndex+1)%rangeOptions.length;}]
    ].forEach(([id,fn])=>$(id).addEventListener('click',()=>{fn();updateSliderUI();applySliderFilters();}));
    notebookToggleBtn.addEventListener('click',()=>notebookModal.style.display='block');
    $('close-notebook').addEventListener('click',()=>notebookModal.style.display='none');
    $('close-accuse').addEventListener('click',()=>accuseModal.style.display='none');
    $('close-experiment').addEventListener('click',()=>experimentModal.style.display='none');
    experimentNotebookBtn.addEventListener('click',()=>{experimentModal.style.display='none';notebookModal.style.display='block';});
    experimentModal.addEventListener('click',e=>{if(e.target===experimentModal)experimentModal.style.display='none';});
    // 원소 도감
    let collection=new Set();
    try{JSON.parse(localStorage.getItem('xfileDex')||'[]').forEach(s=>collection.add(s));}catch(e){}
    function saveCollection(){try{localStorage.setItem('xfileDex',JSON.stringify([...collection]));}catch(e){}}
    function updateDexCount(){dexBtn.innerText=`📚 원소 도감 ${collection.size}/${elementDatabase.length}`;}
    function renderDex(){
        dexGrid.innerHTML=''; dexDetail.innerHTML='<p class="detail-content-placeholder">사건을 해결해서 범인 원소를 도감에 모아 보세요!</p>';
        [...elementDatabase].sort((a,b)=>a.num-b.num).forEach(e=>{
            const cell=document.createElement('button'); const found=collection.has(e.symbol);
            cell.className='dex-cell'+(found?' found':''); cell.type='button';
            cell.innerHTML=found?`<small>${e.num}</small><b>${e.symbol}</b><span>${e.name}</span>`:`<small>?</small><b>?</b><span>미발견</span>`;
            cell.addEventListener('click',()=>{dexDetail.innerHTML=found?elementCardHTML(e)+`<p class="fun-fact">💡 ${e.fact}</p>`:'<p class="detail-content-placeholder">아직 만나지 못한 원소예요.</p>';});
            dexGrid.appendChild(cell);
        });
    }
    dexBtn.addEventListener('click',()=>{renderDex();dexModal.style.display='block';});
    $('close-dex').addEventListener('click',()=>dexModal.style.display='none');
    updateDexCount();
    // 범인 지목 / 결과
    let resultAction=()=>{};
    resultActionBtn.addEventListener('click',()=>{resultModal.style.display='none';resultAction();});
    function clueRows(guess){
        const c=targetCriminal;
        return [["불꽃색",c.flame,guess.flame],["분류",c.type,guess.type],["상태",c.state,guess.state],["원자 번호",c.range.replace("번호 ",""),guess.range.replace("번호 ","")]];
    }
    accuseBtn.addEventListener('click',()=>{
        accuseOptions.innerHTML=''; finalSubmitBtn.disabled=false;
        currentSuspects.filter(e=>!wrongGuesses.includes(e.symbol)).forEach(elem=>{
            const div=document.createElement('div'); div.className='accuse-opt'; div.dataset.symbol=elem.symbol; div.innerText=`${elem.name} (${elem.symbol})`;
            div.addEventListener('click',()=>{document.querySelectorAll('.accuse-opt').forEach(o=>o.classList.remove('selected'));div.classList.add('selected');});
            accuseOptions.appendChild(div);
        });
        accuseModal.style.display='block';
    });
    function showWrongGuess(guess){
        wrongGuesses.push(guess.symbol); eliminatedSuspects.add(guess.symbol);
        renderSuspectChecklist(); applySliderFilters();
        const rows=clueRows(guess).map(([n,c,m])=>`<tr class="${c===m?'row-ok':'row-bad'}"><td>${n}</td><td>${c}</td><td>${m}</td><td>${c===m?'✔':'✘'}</td></tr>`).join('');
        resultBody.innerHTML=`<h2>❌ 범인이 아니에요: ${guess.name} (${guess.symbol})</h2><p class="result-sub">수첩의 단서와 비교해 볼까요?</p><table class="clue-table"><thead><tr><th>단서</th><th>범인</th><th>${guess.name}</th><th></th></tr></thead><tbody>${rows}</tbody></table><p class="result-sub">✘가 하나라도 있으면 범인이 아니에요.</p>`;
        resultActionBtn.innerText="다시 추리하기"; resultAction=()=>{}; resultModal.style.display='block';
    }
    function showSolvedReport(){
        const c=targetCriminal; const isNew=!collection.has(c.symbol);
        collection.add(c.symbol); saveCollection(); updateDexCount();
        const wrong=wrongGuesses.length; const stars=wrong===0?3:wrong===1?2:1;
        const rank=["수습 탐정","유능한 탐정","명탐정"][stars-1];
        const rows=[["불꽃색",c.flame],["분류",c.type],["상태",c.state],["원자 번호",`${c.num}번 (${c.range.replace("번호 ","")})`]].map(([n,v])=>`<tr class="row-ok"><td>${n}</td><td>${v}</td><td>✔</td></tr>`).join('');
        resultBody.innerHTML=`<h2>🎉 사건 해결!</h2><p class="stars">${"⭐".repeat(stars)}${"☆".repeat(3-stars)} <span>${rank}</span></p><div class="culprit-card"><div class="culprit-symbol">${c.symbol}</div><div><b>${c.name}</b><br><small>원자 번호 ${c.num}번 · ${c.family}</small></div></div><table class="clue-table"><thead><tr><th>단서</th><th>${c.name}</th><th></th></tr></thead><tbody>${rows}</tbody></table><p class="result-text">${c.desc}</p><p class="fun-fact">💡 ${c.fact}</p>${isNew?'<p class="new-badge">🆕 도감에 새로 등록했어요!</p>':''}<p class="result-sub">도감 ${collection.size}/${elementDatabase.length}</p>`;
        resultActionBtn.innerText="새 사건 시작"; resultAction=()=>initGame(); resultModal.style.display='block';
    }
    finalSubmitBtn.addEventListener('click',()=>{
        const sel=document.querySelector('.accuse-opt.selected');
        if(!sel){finalSubmitBtn.innerText="먼저 원소를 골라 주세요!";setTimeout(()=>{finalSubmitBtn.innerText="선택 완료";},1500);return;}
        const guess=currentSuspects.find(e=>e.symbol===sel.dataset.symbol);
        accuseModal.style.display='none';
        if(guess.symbol===targetCriminal.symbol) showSolvedReport();
        else showWrongGuess(guess);
    });
    startBtn.addEventListener('click',()=>{titleScreen.classList.remove('active');gameScreen.classList.add('active');initGame();});
});