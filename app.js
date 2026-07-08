const data = {
  timeline: [
    {
      period: "年份区间待补充",
      company: "公司名称待补充",
      background: "公司背景待补充：可写行业、业务类型、产品形态或团队阶段。",
      role: "岗位角色待补充：产品经理 / 活动产品 / 平台产品等。",
      tasks: ["主要任务待补充 01", "主要任务待补充 02", "主要任务待补充 03"],
      outcome: "代表成果待补充：可写沉淀流程、支撑上线、降低沟通成本等安全表达。",
    },
    {
      period: "年份区间待补充",
      company: "公司名称待补充",
      background: "公司背景待补充：可写游戏、工具、内容、电商或海外业务背景。",
      role: "岗位角色待补充：负责需求拆解、链路设计、上线协同。",
      tasks: ["梳理业务规则与页面状态", "推进研发 / 测试 / 运营协同", "补齐埋点、验收和复盘材料"],
      outcome: "代表成果待补充：支撑项目上线，沉淀可复用 checklist 与文档模板。",
    },
    {
      period: "年份区间待补充",
      company: "公司名称待补充",
      background: "公司背景待补充：可写当前阶段最有代表性的产品方向。",
      role: "岗位角色待补充：AI 工作流实践者 / 产品经理。",
      tasks: ["把模糊需求转成结构化输入", "用 AI 辅助文档、原型、质检与复盘", "沉淀提示词、模板和工作流规范"],
      outcome: "代表成果待补充：降低重复整理成本，让判断和推进更聚焦。",
    },
  ],
  workflowLayers: [
    {
      title: "输入层",
      items: ["会议记录", "群聊信息", "模糊需求", "旧文档", "页面截图"],
    },
    {
      title: "处理层",
      items: ["需求拆解", "规则补全", "风险检查", "埋点草案", "测试清单"],
    },
    {
      title: "产出层",
      items: ["PRD", "同步文档", "原型说明", "提测 checklist", "复盘模板"],
    },
  ],
  workflow: [
    ["01", "混乱需求输入", "把分散信息统一收口，标记目标、角色、约束和缺口。"],
    ["02", "结构化拆解", "拆出主链路、规则、状态、权限、异常和待确认项。"],
    ["03", "文档生成", "生成 PRD 初稿、同步文档、字段表和会议材料。"],
    ["04", "原型辅助", "推演页面状态、交互路径和关键兜底场景。"],
    ["05", "质量检查", "检查规则冲突、埋点口径、测试边界和上线风险。"],
    ["06", "复盘沉淀", "把项目经验转成模板、清单和下一次可复用输入。"],
  ],
  projects: [
    {
      name: "KOC 轻商城",
      featured: true,
      icon: "folder",
      summary: "从商品展示、下单链路、后台配置到数据复盘的轻量商城项目。",
      tags: ["商城", "交易链路", "配置后台"],
      detail: {
        项目背景: "面向 KOC 场景，需要更轻的商品展示、下单和推广闭环。",
        我的角色: "负责需求拆解、核心链路设计、后台配置规则和验收推进。",
        核心问题: "如何降低配置理解成本，同时保证商品、订单、推广口径一致。",
        关键规则: "商品上下架、库存扣减、订单状态、推广口径、数据回传。",
        拆解方式: "先拆交易主链路，再拆后台配置、异常兜底和数据看板。",
        最终产出: "PRD、流程图、配置说明、验收清单和复盘模板。",
        "数据 / 影响": "待补充真实数据；当前可展示为支撑上线、沉淀流程、降低沟通成本。",
        可展示材料: "可展示脱敏流程图、字段表和项目复盘摘要。",
      },
    },
    {
      name: "社团库存系统",
      icon: "box",
      summary: "围绕入库、出库、盘点、提醒搭建的轻量库存管理工具。",
      tags: ["库存", "后台", "流程"],
      detail: {
        项目背景: "社团物资分散、借还记录不统一，盘点成本较高。",
        我的角色: "梳理业务角色、库存规则、表单字段和后台操作路径。",
        核心问题: "如何让非专业用户也能稳定完成库存记录和追踪。",
        关键规则: "物资分类、库存变动、借用归还、低库存提醒、盘点记录。",
        拆解方式: "以物资生命周期为主线，拆成入库、领用、归还、盘点、报废。",
        最终产出: "低保真原型、字段说明、状态流转和权限说明。",
        "数据 / 影响": "待补充真实数据；当前可展示为提升库存状态透明度。",
        可展示材料: "可展示系统结构图和典型流程。",
      },
    },
    {
      name: "AI 工作流样板间",
      icon: "spark",
      summary: "把 AI 嵌入产品经理日常产出，用模板和检查链路提升稳定性。",
      tags: ["AI", "模板", "提效"],
      detail: {
        项目背景: "产品工作中存在大量重复整理、检查和沉淀动作。",
        我的角色: "设计工作流、提示词模板、输入规范和质量检查框架。",
        核心问题: "如何让 AI 输出稳定服务真实交付，而不是一次性灵感。",
        关键规则: "输入结构、输出格式、风险检查、人工确认点、版本沉淀。",
        拆解方式: "按输入层、处理层、产出层拆解工作流。",
        最终产出: "提示词库、文档模板、检查清单和演示样板间。",
        "数据 / 影响": "待补充真实数据；当前可展示为降低重复整理成本。",
        可展示材料: "可展示脱敏模板、流程说明和前后对比。",
      },
    },
    {
      name: "海外支付 / 多区上线",
      icon: "card",
      summary: "围绕多地区差异、支付方式、异常路径和上线检查的协同项目。",
      tags: ["支付", "海外", "上线"],
      detail: {
        项目背景: "不同地区支付方式、合规口径、展示文案和异常路径存在差异。",
        我的角色: "梳理链路、对齐规则、推动研发测试验收和上线检查。",
        核心问题: "如何保证多区规则差异下，用户支付路径清晰且问题可追踪。",
        关键规则: "币种、支付方式、失败重试、退款、风控、文案和埋点。",
        拆解方式: "按地区、支付方式、用户状态和异常场景交叉拆表。",
        最终产出: "规则矩阵、验收用例、上线 checklist 和问题跟踪表。",
        "数据 / 影响": "待补充真实数据；当前可展示为降低跨区上线遗漏。",
        可展示材料: "可展示脱敏规则矩阵和检查清单。",
      },
    },
    {
      name: "H5 活动合集",
      icon: "game",
      summary: "游戏网页活动、拉新促活、活动后台和数据分析链路的合集。",
      tags: ["H5", "活动", "增长"],
      detail: {
        项目背景: "多期活动需要快速配置、稳定上线，并能复用基础能力。",
        我的角色: "负责活动规则、页面状态、后台配置、数据埋点和复盘。",
        核心问题: "如何兼顾活动创意、规则严谨、上线效率和数据可解释。",
        关键规则: "参与资格、任务状态、奖励发放、活动时间、异常提示、埋点口径。",
        拆解方式: "拆成用户路径、任务规则、奖励规则、后台配置和数据分析。",
        最终产出: "活动 PRD、页面状态表、埋点表、验收清单和复盘文档。",
        "数据 / 影响": "待补充真实数据；当前可展示为沉淀活动复用流程。",
        可展示材料: "可展示脱敏页面状态表、规则表和活动复盘。",
      },
    },
  ],
  life: [
    ["阿比西尼亚猫", "高能观察员，也是 DingCat OS 的灵感来源。"],
    ["运动 / 健身", "用规律运动补充体力和执行力。"],
    ["演唱会", "收集真实情绪、现场节奏和能量。"],
    ["审美收集", "界面、插画、字体、配色、小物件都进灵感库。"],
    ["个人网站搭建", "把自己也当成一个长期迭代的产品。"],
    ["长期学习", "持续整理方法论、工具链和产品判断。"],
  ],
};

const $ = (selector) => document.querySelector(selector);

function renderTimeline() {
  $("#timeline").innerHTML = data.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-card">
            <span class="timeline-period">${item.period}</span>
            <h3>${item.company}</h3>
            <p class="company-background">${item.background}</p>
            <span class="role-pill">${item.role}</span>
            <ul class="task-list">${item.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>
            <p class="timeline-outcome"><b>代表成果</b>${item.outcome}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderWorkflow() {
  $("#workflowLayers").innerHTML = data.workflowLayers
    .map(
      (layer) => `
        <article class="layer-card">
          <strong>${layer.title}</strong>
          ${layer.items.map((item) => `<span>${item}</span>`).join("")}
        </article>
      `
    )
    .join("");

  $("#workflowSteps").innerHTML = data.workflow
    .map(
      ([num, title, desc]) => `
        <article class="workflow-step">
          <b>${num}</b>
          <h3>${title}</h3>
          <p>${desc}</p>
        </article>
      `
    )
    .join("");
}

function projectTemplate(project, index, featured = false) {
  return `
    <button class="${featured ? "featured-project" : "project-card"}" type="button" data-project="${index}">
      <span class="folder-label">${featured ? "Featured Project" : "项目文件"}</span>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <span class="open-hint">查看详情 →</span>
    </button>
  `;
}

function renderProjects() {
  const featuredIndex = data.projects.findIndex((project) => project.featured);
  $("#featuredProject").outerHTML = projectTemplate(data.projects[featuredIndex], featuredIndex, true);
  $("#projectGrid").innerHTML = data.projects
    .map((project, index) => (index === featuredIndex ? "" : projectTemplate(project, index)))
    .join("");
}

function renderLife() {
  $("#lifeGrid").innerHTML = data.life
    .map(
      ([title, desc]) => `
        <article class="life-item">
          <strong>${title}</strong>
          <p>${desc}</p>
        </article>
      `
    )
    .join("");
}

function setupProjects() {
  const modal = $("#projectModal");
  const detail = $("#projectDetail");
  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (!card) return;
    const project = data.projects[Number(card.dataset.project)];
    detail.innerHTML = `
      <p class="eyebrow">Project Detail</p>
      <h2>${project.name}</h2>
      <p>${project.summary}</p>
      <div class="detail-grid">
        ${Object.entries(project.detail)
          .map(
            ([key, value]) => `
              <div class="detail-block">
                <strong>${key}</strong>
                <span>${value}</span>
              </div>
            `
          )
          .join("")}
      </div>
    `;
    modal.showModal();
  });
}

function setupMbti() {
  const groups = [
    ["E", "I"],
    ["N", "S"],
    ["T", "F"],
    ["J", "P"],
  ];
  const state = ["?", "?", "?", "?"];
  const picker = $("#mbtiLetters");
  const submit = $("#mbtiSubmit");
  const feedback = $("#mbtiFeedback");

  function render() {
    picker.innerHTML = groups
      .map(
        (group, index) => `
          <button class="mbti-letter" type="button" data-index="${index}">
            ${state[index]}
            <small>${group.join("/")}</small>
          </button>
        `
      )
      .join("");
    submit.disabled = state.includes("?");
  }

  picker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    const index = Number(button.dataset.index);
    const [first, second] = groups[index];
    state[index] = state[index] === first ? second : first;
    feedback.textContent = "";
    feedback.className = "mbti-feedback";
    render();
  });

  $("#mbtiOpen").addEventListener("click", () => {
    $("#mbtiModal").showModal();
  });

  submit.addEventListener("click", () => {
    const answer = state.join("");
    const correct = answer === "ENTJ";
    feedback.className = `mbti-feedback ${correct ? "correct" : "wrong"}`;
    feedback.textContent = correct
      ? "猜对啦。ENTJ 线索：目标导向、结构拆解、推进落地、持续复盘，都藏在这个 OS 的细节里。"
      : `你猜的是 ${answer}。差一点，可以回项目页和 AI 链路再找找线索：目标感、拆解力、执行推进、系统化沉淀。`;
  });

  render();
}

function setupCat() {
  const cat = $("#catAssistant");
  const bubble = $("#catBubble");
  const lines = [
    "喵，先拆问题",
    "喵，别只空想",
    "喵，逻辑要顺",
    "喵，往前推推",
    "喵，要有结果",
    "喵，猜四个字",
  ];

  cat.addEventListener("click", () => {
    bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
    bubble.classList.add("show");
    window.setTimeout(() => bubble.classList.remove("show"), 2600);
  });
}

function setupDrag() {
  const doll = $("#doll");
  const stage = $("#welcome");
  let dragging = false;
  let activePointerId = null;
  let offsetX = 0;
  let offsetY = 0;

  doll.addEventListener("pointerdown", (event) => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    event.preventDefault();
    dragging = true;
    activePointerId = event.pointerId;
    doll.setPointerCapture(event.pointerId);
    doll.classList.add("dragging");
    const rect = doll.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    doll.style.left = `${rect.left - stageRect.left}px`;
    doll.style.top = `${rect.top - stageRect.top}px`;
    doll.style.bottom = "auto";
    doll.style.right = "auto";
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
  });

  window.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== activePointerId) return;
    event.preventDefault();
    const stageRect = stage.getBoundingClientRect();
    const dollRect = doll.getBoundingClientRect();
    const left = Math.max(8, Math.min(event.clientX - stageRect.left - offsetX, stageRect.width - dollRect.width - 8));
    const top = Math.max(8, Math.min(event.clientY - stageRect.top - offsetY, stageRect.height - dollRect.height - 8));
    doll.style.left = `${left}px`;
    doll.style.top = `${top}px`;
  });

  const stopDrag = () => {
    if (!dragging) return;
    dragging = false;
    activePointerId = null;
    doll.classList.remove("dragging");
  };

  window.addEventListener("pointerup", stopDrag);
  window.addEventListener("pointercancel", stopDrag);
  doll.addEventListener("lostpointercapture", stopDrag);
}

function setupNav() {
  const links = [...document.querySelectorAll(".nav-item")];
  const sections = links.map((link) => document.getElementById(link.dataset.nav));
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("active", link.dataset.nav === visible.target.id));
    },
    { rootMargin: "-25% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
  );
  sections.forEach((section) => observer.observe(section));
}

function setupSystemTime() {
  const time = $("#systemTime");
  if (!time) return;
  const tick = () => {
    time.textContent = new Date().toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  tick();
  window.setInterval(tick, 30000);
}

function setupParticles() {
  const canvas = $("#particleText");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const text = "欢迎进入 DingCat OS";
  const pointer = { x: -999, y: -999 };
  let particles = [];
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildParticles(rect.width, rect.height);
  }

  function buildParticles(width, height) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#0757f7";
    ctx.font = `900 ${Math.max(48, Math.min(118, width / 9))}px "Trebuchet MS", Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    wrapText(text, width / 2, height / 2, width * 0.94, Math.max(64, width / 11));
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const gap = window.matchMedia("(max-width: 760px)").matches ? 10 : 6;
    particles = [];
    for (let y = 0; y < canvas.height; y += gap * dpr) {
      for (let x = 0; x < canvas.width; x += gap * dpr) {
        const alpha = image.data[(y * canvas.width + x) * 4 + 3];
        if (alpha > 80) {
          particles.push({ x: x / dpr, y: y / dpr, homeX: x / dpr, homeY: y / dpr, vx: 0, vy: 0 });
        }
      }
    }
  }

  function wrapText(value, x, y, maxWidth, lineHeight) {
    const chars = [...value];
    const lines = [];
    let line = "";
    chars.forEach((char) => {
      const test = line + char;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = char;
      } else {
        line = test;
      }
    });
    lines.push(line);
    const startY = y - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((lineText, index) => ctx.fillText(lineText, x, startY + index * lineHeight));
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "#0757f7";
    particles.forEach((particle) => {
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 92) {
        const force = (92 - dist) / 92;
        particle.vx += (dx / (dist || 1)) * force * 3.2;
        particle.vy += (dy / (dist || 1)) * force * 3.2;
      }
      particle.vx += (particle.homeX - particle.x) * 0.045;
      particle.vy += (particle.homeY - particle.y) * 0.045;
      particle.vx *= 0.82;
      particle.vy *= 0.82;
      particle.x += particle.vx;
      particle.y += particle.vy;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, window.matchMedia("(max-width: 760px)").matches ? 2 : 2.35, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
  });
  canvas.addEventListener("pointerleave", () => {
    pointer.x = -999;
    pointer.y = -999;
  });
  window.addEventListener("resize", resize);
  resize();
  draw();
}

renderTimeline();
renderWorkflow();
renderProjects();
renderLife();
setupProjects();
setupMbti();
setupCat();
setupDrag();
setupNav();
setupSystemTime();
setupParticles();
