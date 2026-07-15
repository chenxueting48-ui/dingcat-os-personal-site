const data = {
  timeline: [
    {
      stage: "阶段 01",
      node: "01 链路理解",
      title: "B 端产品与数据平台设计",
      meta: "2022.09 - 2023.12｜北京兴长信达｜产品助理",
      background: "品牌数字化服务场景，围绕 BI 数据平台、小程序商城、经销商后台推进产品落地。",
      tags: ["BI 数据平台", "小程序商城", "交易链路"],
      summary: "参与信达 BI 平台 0-1 落地，整合 250+ 数据表能力，服务 20+ 品牌。",
      detail: {
        label: "01｜链路理解",
        intro: "从 B 端数据平台和小程序商城开始，理解数据、交易和后台系统如何支撑业务决策。",
        responsibilities: [
          "参与 BI 数据平台、小程序商城、经销商后台设计；",
          "梳理数据分析、用户转化、交易流程和运营效率相关需求；",
          "参与商品浏览、支付结算、订单流转、物流跟踪、售后处理等交易闭环设计。",
        ],
        outcomes: [
          ["250+", "数据表能力梳理"],
          ["20+", "品牌数据服务支持"],
          ["完整交易闭环", "覆盖浏览、支付、订单、物流、售后"],
        ],
        abilities: ["数据意识", "交易链路", "后台系统", "用户转化"],
      },
    },
    {
      stage: "阶段 02",
      node: "02 活动落地",
      title: "游戏官网与网页活动落地",
      meta: "2024.04 - 2024.09｜莉莉丝｜产品经理 / 广告技术组",
      background: "游戏业务官网与网页活动场景，覆盖官网搭建、人拉人裂变、CBT 招募、预约及常规活动。",
      tags: ["游戏官网", "裂变活动", "工具沉淀"],
      summary: "搭建 / 迭代网页活动 30+ 个，负责 8 条游戏线、48 个官网。",
      detail: {
        label: "02｜活动落地",
        intro: "从游戏官网和网页活动切入，高频处理活动玩法、页面状态、增长入口和上线协作。",
        responsibilities: [
          "推进公司游戏官网搭建与迭代；",
          "支持人拉人裂变、CBT 招募、预约及常规网页活动落地；",
          "沉淀活动查数、TDK、社媒分享、防刷等经验与工具文档。",
        ],
        outcomes: [
          ["30+", "网页活动搭建 / 迭代"],
          ["8 条", "游戏线支持"],
          ["48 个", "官网搭建与迭代"],
          ["近 10 篇", "经验 / 工具文档沉淀"],
        ],
        abilities: ["活动落地", "官网搭建", "增长玩法", "工具沉淀"],
      },
    },
    {
      stage: "阶段 03",
      node: "03 规模交付",
      title: "海外网页活动与规模化交付",
      meta: "2024.09 - 至今｜沐瞳｜Web 产品经理",
      background: "海外 & 国内游戏官网及网页活动场景，覆盖需求承接、活动落地、上线复盘与玩法优化。",
      tags: ["海外活动", "多业务线", "标准化沉淀"],
      summary: "独立交付 30+ 海外活动项目，并行支持 7 条业务线，累计 PV 超 1.6 亿。",
      detail: {
        label: "03｜规模交付",
        intro: "负责海外与国内网页活动完整闭环，从需求承接到上线复盘，支撑多业务线规模化交付。",
        responsibilities: [
          "承接海外 & 国内游戏官网及网页活动需求；",
          "主导需求评审、页面搭建、配置联调、测试验收、上线发布和数据复盘；",
          "沉淀玩法说明、活动配置模板和上线 Checklist，提升团队交付效率与协作一致性。",
        ],
        outcomes: [
          ["30+", "海外活动项目独立交付"],
          ["7 条", "游戏业务线并行支持"],
          ["PV 1.6 亿+", "累计曝光"],
          ["UV 3000 万+", "独立访问"],
          ["95%", "业务方需求满意度"],
        ],
        abilities: ["规模化交付", "跨团队协作", "数据复盘", "标准化沉淀"],
      },
      current: true,
    },
  ],
  workflowSteps: [
    {
      title: "01 需求输入",
      short: "散乱沟通 → 结构化输入",
      intent: "从散乱沟通变成带框架的信息收集。",
      output: "结构化需求输入",
      traditional: {
        text: "开会靠手记，信息散在聊天、截图和脑子里。",
        keywords: ["口头沟通", "手动记录", "信息分散", "容易遗漏"],
        motifs: [["people", "多人对话"], ["bubble", "聊天气泡"], ["screenshot", "页面截图"], ["note", "手写记录"], ["question", "问号"]],
      },
      ai: {
        text: "先准备信息收集模板，会议记录直接整理成结构化输入。",
        keywords: ["提前设定提纲", "按模板提问", "录屏 / 记录输入", "结构化整理"],
        motifs: [["template", "信息收集模板"], ["record", "会议记录"], ["robot", "AI 小助手"], ["checklist", "整理清单"], ["check", "勾选项"]],
      },
    },
    {
      title: "02 信息整理",
      short: "人工归纳 → 框架拆解",
      intent: "从靠脑子归纳变成按字段拆解。",
      output: "需求框架板",
      traditional: {
        text: "人工归纳目标、玩法、规则和风险，待确认项容易漏。",
        keywords: ["人工归纳", "逻辑拼接", "待确认遗漏", "信息不齐"],
        motifs: [["paper", "杂乱纸张"], ["note", "便签堆"], ["person", "人工整理"], ["question", "问号"], ["risk", "红色标记"]],
      },
      ai: {
        text: "AI 按模板拆成活动目的、玩法、页面、奖励、风险和待确认项。",
        keywords: ["活动目的", "核心玩法", "页面结构", "奖励机制", "风险点", "待确认项"],
        motifs: [["board", "需求框架板"], ["table", "分类表格"], ["note-grid", "模块便签"], ["arrow-sort", "自动归类"], ["risk", "风险点"]],
      },
    },
    {
      title: "03 原型初稿",
      short: "手搓原型 → AI 草图",
      intent: "从手搓粗略原型变成 AI 辅助生成第一版结构。",
      output: "可讨论的原型初稿",
      traditional: {
        text: "手动画粗略原型，只能表达大致功能，细节靠口头补。",
        keywords: ["手搓原型", "只画大框架", "逻辑不完整", "口头补充"],
        motifs: [["wireframe", "粗糙线框"], ["blank", "空白画板"], ["sketch", "手绘页面"], ["note", "补充说明"], ["question", "逻辑缺口"]],
      },
      ai: {
        text: "先生成提示词，再让 AI 产出一版页面结构草图，我再判断和修改。",
        keywords: ["提示词生成", "页面结构图", "原型草稿", "人工判断修改"],
        motifs: [["prompt", "Prompt 文档"], ["robot", "AI 生成"], ["figma", "原型画板"], ["layout", "页面模块"], ["edit", "标注修改"]],
      },
    },
    {
      title: "04 方案确认",
      short: "反复追问 → 缺口前置",
      intent: "从反复追问确认变成提前暴露缺口。",
      output: "可评审方案",
      traditional: {
        text: "目标、规则、边界和风险需要一轮轮追问，沟通成本高。",
        keywords: ["多轮确认", "反复沟通", "规则缺口", "风险后置"],
        motifs: [["people", "多人来回"], ["loop", "循环箭头"], ["todo", "待确认清单"], ["bubble", "消息弹窗"], ["edit", "反复修改"]],
      },
      ai: {
        text: "AI 自动整理待确认项、风险点和评审材料，帮助我更快收束方案。",
        keywords: ["待确认项", "风险提示", "规则缺口", "评审材料", "方案收束"],
        motifs: [["todo", "待确认清单"], ["risk", "风险提示"], ["deck", "评审材料"], ["doc", "同步文档"], ["check", "勾选状态"]],
      },
    },
    {
      title: "05 开发推进",
      short: "文档分散 → 标准交付",
      intent: "从文档分散补齐变成交付物标准化。",
      output: "标准化交付物",
      traditional: {
        text: "PRD、原型说明、埋点、测试点和配置说明分散处理。",
        keywords: ["文档分散", "手动补充", "容易遗漏", "协作成本高"],
        motifs: [["folder-mess", "混乱文件夹"], ["prd", "PRD 文件"], ["table", "埋点表"], ["test", "测试点"], ["config", "配置说明"]],
      },
      ai: {
        text: "AI 辅助生成 PRD 初稿、原型说明、埋点草案、测试 checklist 和上线检查项。",
        keywords: ["PRD 初稿", "原型说明", "埋点草案", "测试 checklist", "上线检查项"],
        motifs: [["folder", "文档包"], ["checklist", "Checklist"], ["table", "埋点草案"], ["wireframe", "原型说明"], ["launch", "上线检查"]],
      },
    },
    {
      title: "06 复盘沉淀",
      short: "经验留脑 → 模板复用",
      intent: "从做完就散变成经验复用。",
      output: "可复用经验库",
      traditional: {
        text: "复盘容易拖延，经验停留在个人脑子里，下次重新来。",
        keywords: ["复盘拖延", "经验分散", "难以复用", "下次重来"],
        motifs: [["paper", "堆积资料"], ["folder-mess", "未整理文件"], ["person", "抓头"], ["screenshot", "零散截图"], ["question", "遗忘符号"]],
      },
      ai: {
        text: "AI 辅助生成复盘模板，沉淀 SOP、提示词、模板和项目经验库。",
        keywords: ["复盘模板", "SOP", "可复用提示词", "项目经验库", "反哺下一轮"],
        motifs: [["archive", "归档文件夹"], ["sop", "SOP"], ["prompt", "Prompt 库"], ["template", "模板库"], ["loop", "闭环箭头"]],
      },
    },
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
let lockedScrollY = 0;

function lockPageForModal() {
  if (document.body.classList.contains("modal-locked")) return;
  lockedScrollY = window.scrollY;
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.classList.add("modal-locked");
  [$(".page-flow"), $(".dock-nav")].filter(Boolean).forEach((element) => {
    element.inert = true;
  });
}

function unlockPageForModal() {
  if (document.querySelector("dialog[open]")) return;
  document.body.classList.remove("modal-locked");
  document.body.style.top = "";
  [$(".page-flow"), $(".dock-nav")].filter(Boolean).forEach((element) => {
    element.inert = false;
  });
  window.scrollTo(0, lockedScrollY);
}

function openModal(modal) {
  if (!modal || modal.open) return;
  lockPageForModal();
  modal.classList.remove("is-closing");
  try {
    modal.showModal();
  } catch (error) {
    unlockPageForModal();
    throw error;
  }
}

function closeModalWithAnimation(modal) {
  if (!modal?.open || modal.classList.contains("is-closing")) return;
  modal.classList.add("is-closing");
  window.setTimeout(() => {
    modal.classList.remove("is-closing");
    modal.close();
  }, 160);
}

function setupModalBehavior() {
  document.querySelectorAll("dialog.modal").forEach((modal) => {
    modal.addEventListener("close", unlockPageForModal);
    modal.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeModalWithAnimation(modal);
    });
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModalWithAnimation(modal);
    });
    modal.querySelectorAll(".modal-close").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        closeModalWithAnimation(modal);
      });
    });
    modal.addEventListener("wheel", (event) => event.stopPropagation(), { passive: true });
    modal.addEventListener("touchmove", (event) => event.stopPropagation(), { passive: true });
  });
}

function renderTimeline() {
  $("#timeline").innerHTML = data.timeline
    .map(
      (item, index) => `
        <article class="timeline-item ${item.current ? "current-stage" : ""}">
          <button class="timeline-dot" type="button" data-experience="${index}" aria-label="查看${item.title}详情">
            ${item.stage.replace("阶段 ", "")}
          </button>
          <button class="timeline-node-label" type="button" data-experience="${index}" aria-label="查看${item.node}详情">
            ${item.node}
          </button>
          <div class="timeline-card" data-experience="${index}" tabindex="0" role="button" aria-label="查看${item.title}详情">
            <div class="stage-row">
              <span class="stage-label">${item.stage}</span>
              ${item.current ? '<span class="current-label">当前阶段</span>' : ""}
            </div>
            <h3>${item.title}</h3>
            <p class="timeline-meta">${item.meta}</p>
            <div class="timeline-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <p class="timeline-outcome"><b>代表成果</b><span>${item.summary}</span></p>
            <button class="timeline-detail-trigger" type="button" data-experience="${index}">查看详情</button>
          </div>
        </article>
      `
    )
    .join("");
}

function setupExperienceDetails() {
  const modal = $("#experienceModal");
  const title = $("#experienceModalTitle");
  const detail = $("#experienceDetail");
  const timeline = $("#timeline");
  let activeIndex = 0;
  let lastTrigger = null;

  const focusableSelector = [
    "button:not([disabled])",
    "[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

  const setLinkedHover = (target, active, relatedTarget = null) => {
    const trigger = target.closest("[data-experience]");
    if (!trigger || !timeline?.contains(trigger)) return;
    const item = trigger.closest(".timeline-item");
    if (!active && item?.contains(relatedTarget)) return;
    item?.classList.toggle("is-linked-hover", active);
  };

  const renderExperience = (index, direction = 0) => {
    const item = data.timeline[index];
    activeIndex = index;
    title.textContent = item.title;
    modal.dataset.origin = index === 0 ? "left" : index === data.timeline.length - 1 ? "right" : "center";
    detail.classList.remove("is-switching-prev", "is-switching-next");
    detail.innerHTML = `
      <div class="experience-detail-body">
        <header class="experience-detail-head">
          <span class="experience-stage-tag">${item.detail.label}</span>
          <h2>${item.title}</h2>
          <p class="timeline-meta">${item.meta}</p>
        </header>
        <p class="experience-summary-note">${item.detail.intro}</p>
        <section class="experience-detail-section">
          <h3>我主要负责</h3>
          <ul class="experience-detail-list">
            ${item.detail.responsibilities.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </section>
        <section class="experience-detail-section">
          <h3>代表成果</h3>
          <div class="experience-metric-grid">
            ${item.detail.outcomes
              .map(
                ([value, label]) => `
                  <article class="experience-metric-card">
                    <strong>${value}</strong>
                    <span>${label}</span>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
        <section class="experience-detail-section">
          <h3>能力沉淀</h3>
          <div class="experience-skill-tags">
            ${item.detail.abilities.map((ability) => `<span>${ability}</span>`).join("")}
          </div>
        </section>
        <footer class="experience-modal-nav" aria-label="经历阶段切换">
          ${
            index > 0
              ? `<button class="experience-switch prev" type="button" data-experience-switch="${index - 1}">← 上一阶段</button>`
              : "<span></span>"
          }
          ${
            index < data.timeline.length - 1
              ? `<button class="experience-switch next" type="button" data-experience-switch="${index + 1}">下一阶段 →</button>`
              : ""
          }
        </footer>
      </div>
    `;
    if (direction) {
      window.requestAnimationFrame(() => {
        detail.classList.add(direction > 0 ? "is-switching-next" : "is-switching-prev");
      });
    }
  };

  const switchExperience = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= data.timeline.length || nextIndex === activeIndex) return;
    const direction = nextIndex > activeIndex ? 1 : -1;
    renderExperience(nextIndex, direction);
    const firstButton = detail.querySelector("[data-experience-switch]");
    firstButton?.focus({ preventScroll: true });
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-experience]");
    if (!button) return;
    lastTrigger = button;
    renderExperience(Number(button.dataset.experience));
    openModal(modal);
    window.setTimeout(() => modal.querySelector(".modal-close")?.focus({ preventScroll: true }), 0);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.matches(".timeline-card[data-experience]") ? event.target : null;
    if (!card) return;
    event.preventDefault();
    card.click();
  });

  detail.addEventListener("click", (event) => {
    const switchButton = event.target.closest("[data-experience-switch]");
    if (!switchButton) return;
    switchExperience(Number(switchButton.dataset.experienceSwitch));
  });

  modal.addEventListener("keydown", (event) => {
    if (!modal.open) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      switchExperience(activeIndex - 1);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      switchExperience(activeIndex + 1);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll(focusableSelector)].filter(
      (element) => element.offsetParent !== null || element === document.activeElement
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  modal.addEventListener("close", () => {
    lastTrigger?.focus?.({ preventScroll: true });
  });

  timeline?.addEventListener("mouseover", (event) => setLinkedHover(event.target, true));
  timeline?.addEventListener("mouseout", (event) => setLinkedHover(event.target, false, event.relatedTarget));
  timeline?.addEventListener("focusin", (event) => setLinkedHover(event.target, true));
  timeline?.addEventListener("focusout", (event) => setLinkedHover(event.target, false, event.relatedTarget));
}

function setupExperienceEntrance() {
  const section = $("#experience");
  if (!section) return;
  if (!("IntersectionObserver" in window)) {
    section.classList.add("has-entered");
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry?.isIntersecting) return;
      section.classList.add("has-entered");
      observer.disconnect();
    },
    { threshold: 0.42 }
  );
  observer.observe(section);
}

function renderWorkflow() {
  $("#workflowMap").innerHTML = `
    <svg class="workflow-illustration" viewBox="0 0 2400 420" role="img" aria-label="DingCat OS 横向 AI 产品工作流示意图">
      <defs>
        <marker id="flowArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="flow-arrow-head"></path>
        </marker>
        <marker id="loopArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="loop-arrow-head"></path>
        </marker>
      </defs>

      <g class="flow-inputs">
        <text x="72" y="48" class="svg-title">多方输入</text>
        <text x="74" y="74" class="svg-caption">信息来源很杂</text>
        ${["业务", "产品", "设计", "研发", "测试", "运营"]
          .map((role, index) => {
            const x = 74 + (index % 3) * 86;
            const y = 112 + Math.floor(index / 3) * 74;
            return `
              <g class="role-chip">
                <circle cx="${x}" cy="${y}" r="19"></circle>
                <path d="M ${x - 20} ${y + 28} q 20 -16 40 0"></path>
                <text x="${x}" y="${y + 58}" text-anchor="middle">${role}</text>
              </g>
            `;
          })
          .join("")}
        ${[
          [280, 72, "群聊信息", -7],
          [310, 122, "会议记录", 5],
          [274, 176, "页面截图", -4],
          [330, 225, "历史文档", 7],
          [246, 266, "模糊需求", -6],
          [350, 302, "临时想法", 4],
        ]
          .map(
            ([x, y, label, rotate]) => `
              <g class="flying-note" transform="translate(${x} ${y}) rotate(${rotate})">
                <rect x="0" y="0" width="82" height="34" rx="10"></rect>
                <text x="41" y="22" text-anchor="middle">${label}</text>
              </g>
            `
          )
          .join("")}
        <path class="flow-line" d="M 365 186 C 408 174, 430 170, 470 168" marker-end="url(#flowArrow)"></path>
      </g>

      <g class="demand-pool">
        <text x="510" y="60" class="svg-title">需求池</text>
        <path class="pool-body" d="M 472 98 h 252 l -26 178 q -98 30 -200 0 z"></path>
        <path class="pool-lip" d="M 468 96 q 132 -36 262 0 v 42 q -130 33 -262 0 z"></path>
        ${[
          [512, 130, "目标"],
          [602, 126, "规则"],
          [552, 176, "页面"],
          [646, 178, "奖励"],
          [520, 226, "风险"],
          [608, 230, "待确认"],
          [486, 178, "埋点"],
          [668, 226, "支付"],
        ]
          .map(
            ([x, y, label]) => `
              <g class="pool-paper">
                <rect x="${x}" y="${y}" width="68" height="34" rx="9"></rect>
                <text x="${x + 34}" y="${y + 22}" text-anchor="middle">${label}</text>
              </g>
            `
          )
          .join("")}
      </g>

      <path class="intake-tube" d="M 724 184 C 764 184, 790 202, 830 224 C 850 236, 864 238, 886 238"></path>
      <path class="flow-line" d="M 735 166 C 776 152, 804 152, 844 166" marker-end="url(#flowArrow)"></path>

      <g class="ai-workbench">
        <text x="885" y="58" class="svg-title">AI Copilot 处理</text>
        <text x="886" y="84" class="svg-caption">辅助整理，不直接拍板</text>
        <path class="sort-belt" d="M 826 244 H 1168"></path>
        <circle class="gear gear-a" cx="872" cy="246" r="17"></circle>
        <circle class="gear gear-b" cx="1124" cy="246" r="17"></circle>
        <rect class="ai-progress" x="928" y="222" width="104" height="14" rx="7"></rect>
        <rect class="ai-progress-fill" x="932" y="226" width="64" height="6" rx="3"></rect>
        <rect class="desk-top" x="850" y="242" width="288" height="42" rx="16"></rect>
        <rect class="screen-doodle" x="910" y="116" width="128" height="92" rx="18"></rect>
        <circle class="robot-eye" cx="952" cy="157" r="7"></circle>
        <circle class="robot-eye" cx="998" cy="157" r="7"></circle>
        <path class="robot-mouth" d="M 956 178 q 20 16 42 0"></path>
        <path class="robot-antenna" d="M 974 116 v -30"></path>
        <circle class="robot-antenna-dot" cx="974" cy="80" r="8"></circle>
        ${[
          [806, 112, "需求拆解"],
          [788, 170, "规则补全"],
          [792, 226, "风险检查"],
          [1048, 102, "埋点草案"],
          [1068, 158, "PRD 初稿"],
          [1060, 216, "同步文档"],
          [898, 302, "测试清单"],
          [1006, 304, "复盘模板"],
        ]
          .map(
            ([x, y, label]) => `
              <g class="output-doc">
                <path d="M ${x} ${y} h 86 v 38 h -86 z"></path>
                <text x="${x + 43}" y="${y + 25}" text-anchor="middle">${label}</text>
              </g>
            `
          )
          .join("")}
      </g>

      <path class="doc-flight" d="M 1142 178 C 1184 144, 1220 146, 1260 162" marker-end="url(#flowArrow)"></path>
      <g class="paper-plane" transform="translate(1210 148) rotate(14)">
        <path d="M 0 0 L 42 14 L 5 28 L 11 15 z"></path>
      </g>

      <g class="decision-gates">
        <text x="1268" y="58" class="svg-title">产研确认 / 方案收束</text>
        <text x="1270" y="84" class="svg-caption">人来判断，AI 做辅助</text>
        ${[
          [1260, "目标确认"],
          [1362, "规则确认"],
          [1464, "风险确认"],
          [1566, "进入开发?"],
        ]
          .map(
            ([x, label]) => `
              <g class="gate">
                <path d="M ${x} 258 v -86 q 0 -56 39 -56 t 39 56 v 86 z"></path>
                <path d="M ${x + 18} 258 v -78 q 0 -30 21 -30 t 21 30 v 78 z"></path>
                <circle cx="${x + 39}" cy="210" r="7"></circle>
                <text x="${x + 39}" y="288" text-anchor="middle">${label}</text>
              </g>
            `
          )
          .join("")}
      </g>

      <path class="flow-line" d="M 1660 184 C 1690 184, 1714 184, 1750 184" marker-end="url(#flowArrow)"></path>

      <g class="delivery-track">
        <text x="1760" y="58" class="svg-title">项目推进链路</text>
        <path class="track-line" d="M 1760 204 H 2110"></path>
        ${[
          [1760, "原型 / 页面"],
          [1848, "配置 / 联调"],
          [1936, "测试 / 验收"],
          [2024, "上线发布"],
          [2112, "数据复盘"],
        ]
          .map(
            ([x, label], index) => `
              <g class="station">
                <circle cx="${x}" cy="204" r="24"></circle>
                <path d="M ${x - 18} 166 h 36 v 26 h -36 z"></path>
                <text x="${x}" y="258" text-anchor="middle">${label}</text>
                <text x="${x}" y="211" text-anchor="middle">${index + 1}</text>
              </g>
            `
          )
          .join("")}
        ${[
          [1742, 102, "活动规则", -8],
          [1832, 314, "多语言", 5],
          [1910, 106, "支付链路", 7],
          [2016, 314, "上线检查", -5],
          [2090, 106, "复盘数据", 6],
        ]
          .map(
            ([x, y, label, rotate]) => `
              <g class="work-keyword" transform="translate(${x} ${y}) rotate(${rotate})">
                <rect x="0" y="0" width="76" height="28" rx="14"></rect>
                <text x="38" y="19" text-anchor="middle">${label}</text>
              </g>
            `
          )
          .join("")}
      </g>

      <path class="flow-line" d="M 2160 184 C 2190 184, 2210 184, 2240 184" marker-end="url(#flowArrow)"></path>

      <g class="archive-cabinet">
        <text x="2220" y="58" class="svg-title">复盘归档</text>
        <rect class="cabinet-body" x="2214" y="106" width="150" height="188" rx="18"></rect>
        <rect class="cabinet-drawer" x="2234" y="134" width="110" height="38" rx="8"></rect>
        <rect class="cabinet-drawer" x="2234" y="188" width="110" height="38" rx="8"></rect>
        <rect class="cabinet-drawer" x="2234" y="242" width="110" height="38" rx="8"></rect>
        <path class="folder-tab" d="M 2198 112 h 52 l 14 18 h 84 v 38 h -150 z"></path>
        ${[
          [2196, 318, "SOP"],
          [2254, 328, "Checklist"],
          [2340, 320, "模板"],
          [2194, 356, "复盘记录"],
          [2280, 366, "可复用提示词"],
          [2296, 318, "项目经验库"],
        ]
          .map(
            ([x, y, label]) => `
              <g class="archive-tag">
                <rect x="${x}" y="${y}" width="${label.length > 5 ? 98 : 58}" height="26" rx="13"></rect>
                <text x="${x + (label.length > 5 ? 49 : 29)}" y="${y + 18}" text-anchor="middle">${label}</text>
              </g>
            `
          )
          .join("")}
      </g>

      <path class="loop-line" d="M 2286 388 C 1800 430, 1050 430, 602 332 C 560 322, 548 302, 558 282" marker-end="url(#loopArrow)"></path>
      <g class="loop-label">
        <rect x="1140" y="374" width="220" height="34" rx="17"></rect>
        <text x="1250" y="397" text-anchor="middle">沉淀模板，反哺下一轮</text>
      </g>
      <path class="paw-dot" d="M 116 336 q 18 -16 36 0 q -16 22 -36 0"></path>
      <path class="spark-one" d="M 2350 74 l 10 20 l 22 4 l -18 14 l 4 22 l -18 -12 l -20 10 l 6 -22 l -16 -16 l 22 -2 z"></path>
    </svg>
  `;
}

function setupWorkflowMap() {
  const viewport = $("#workflowViewport");
  const progress = $("#workflowProgress");
  const buttons = [...document.querySelectorAll("[data-workflow-pan]")];
  if (!viewport || !progress) return;

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  const updateProgress = () => {
    const maxScroll = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
    const ratio = viewport.scrollLeft / maxScroll;
    progress.style.transform = `scaleX(${Math.max(0.18, Math.min(1, ratio + 0.18))})`;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      viewport.scrollBy({
        left: Number(button.dataset.workflowPan) * viewport.clientWidth * 0.62,
        behavior: "smooth",
      });
    });
  });

  viewport.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = viewport.scrollLeft;
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add("is-dragging");
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    event.preventDefault();
    viewport.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  const stopDragging = () => {
    isDragging = false;
    viewport.classList.remove("is-dragging");
  };

  viewport.addEventListener("pointerup", stopDragging);
  viewport.addEventListener("pointercancel", stopDragging);
  viewport.addEventListener("lostpointercapture", stopDragging);
  viewport.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    viewport.scrollLeft += event.deltaY;
  }, { passive: false });
  viewport.addEventListener("scroll", updateProgress);
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

function motifTemplate([type, label]) {
  return `
    <span class="workflow-motif ${type}">
      <i aria-hidden="true"></i>
      <b>${label}</b>
    </span>
  `;
}

function workflowSideTemplate(side, mode) {
  return `
    <div class="workflow-side ${mode}">
      <div class="workflow-side-title">${mode === "traditional" ? "传统方式" : "AI 工作流"}</div>
      <p>${side.text}</p>
      <div class="workflow-scene" aria-hidden="true">
        ${side.motifs.map(motifTemplate).join("")}
      </div>
      <div class="workflow-keywords">
        ${side.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
      </div>
    </div>
  `;
}

const WORKFLOW_SCENES = {
  prototype: {
    label: "原型交付",
    oldSrc: "./assets/workflow-prototype-old-custom.png",
    aiSrc: "./assets/workflow-prototype-ai-custom.png",
    oldAlt: "旧流程：传统原型交付，从多方沟通、手动记录到多轮确认与原型交付",
    aiAlt: "新流程：AI 辅助原型交付，从信息收集模板到方案确认与原型交付",
  },
  document: {
    label: "同步文档",
    oldSrc: "./assets/workflow-document-old-custom.png",
    aiSrc: "./assets/workflow-document-ai-custom.png",
    oldAlt: "旧流程：手动维护同步文档，信息重复搬运、字段易漏且版本难统一",
    aiAlt: "新流程：AI 辅助同步文档维护，完成材料归集、字段提取、检查并由产品经理定稿",
  },
  multitask: {
    label: "多活动并行",
    oldSrc: "./assets/workflow-multitask-old-custom.png",
    aiSrc: "./assets/workflow-multitask-ai-custom.png",
    oldAlt: "旧流程：多个活动靠人工追踪，状态分散且风险容易后置",
    aiAlt: "新流程：AI 辅助整理多活动状态，由产品经理判断优先级并推进",
  },
};

const WORKFLOW_SCENE_KEYS = ["prototype", "document", "multitask"];

function renderWorkflow() {
  const root = $("#prototypeDelivery");
  if (!root) return;
  const initial = WORKFLOW_SCENES.prototype;

  root.innerHTML = `
    <div class="prototype-layer prototype-ai-layer" aria-hidden="true">
      <img class="prototype-flow-art" src="${initial.aiSrc}" alt="${initial.aiAlt}" draggable="false" />
    </div>
    <div class="prototype-layer prototype-legacy-layer">
      <img class="prototype-flow-art" src="${initial.oldSrc}" alt="${initial.oldAlt}" draggable="false" />
    </div>
    <div class="prototype-shards" aria-hidden="true"></div>
    <div class="prototype-build-overlay" aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i><i></i><b></b>
    </div>
    <div class="prototype-target-ripple" aria-hidden="true"></div>
    <div class="prototype-impact" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="prototype-hammer" aria-hidden="true"><span class="hammer-head"></span><span class="hammer-handle"></span></div>
    <div class="prototype-hint-bubble" aria-hidden="true">试着敲一下</div>
  `;
}

function setupWorkflowMap() {
  const section = $("#workflow");
  const root = $("#prototypeDelivery");
  const resetButton = $("#prototypeReset");
  const nextButton = $("#workflowNext");
  const progress = $("#workflowProgress");
  const status = $("#prototypeDeliveryStatus");
  const tabs = [...document.querySelectorAll("[data-workflow-scene]")];
  if (!section || !root || !resetButton || !nextButton || !progress || !status || tabs.length === 0) return;

  const oldLayer = root.querySelector(":scope > .prototype-legacy-layer");
  const aiLayer = root.querySelector(":scope > .prototype-ai-layer");
  const oldImage = oldLayer.querySelector("img");
  const aiImage = aiLayer.querySelector("img");
  const shardLayer = root.querySelector(".prototype-shards");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sceneStates = Object.fromEntries(WORKFLOW_SCENE_KEYS.map((key) => [key, { revealed: false, visited: false, hinted: false }]));
  Object.values(WORKFLOW_SCENES).flatMap(({ oldSrc, aiSrc }) => [oldSrc, aiSrc]).forEach((src) => {
    const image = new Image();
    image.src = src;
  });
  let activeScene = "prototype";
  let state = "idle";
  let sectionVisible = false;
  let hintStartTimer = 0;
  let hintEndTimer = 0;
  let breakTimer = 0;
  let finishTimer = 0;
  let buildCleanupTimer = 0;
  let resetTimer = 0;
  let sceneSwitchTimer = 0;

  const shardShapes = [
    { shape: "polygon(0 0,26% 0,22% 15%,25% 31%,0 37%)", cx: .12, cy: .16, rotation: -8 },
    { shape: "polygon(26% 0,52% 0,54% 14%,50% 29%,25% 31%,22% 15%)", cx: .38, cy: .15, rotation: 6 },
    { shape: "polygon(52% 0,78% 0,80% 16%,75% 32%,50% 29%,54% 14%)", cx: .64, cy: .15, rotation: -5 },
    { shape: "polygon(78% 0,100% 0,100% 38%,75% 32%,80% 16%)", cx: .89, cy: .17, rotation: 8 },
    { shape: "polygon(0 37%,25% 31%,22% 48%,28% 64%,0 70%)", cx: .12, cy: .5, rotation: 7 },
    { shape: "polygon(25% 31%,50% 29%,53% 45%,48% 62%,28% 64%,22% 48%)", cx: .38, cy: .47, rotation: -7 },
    { shape: "polygon(50% 29%,75% 32%,78% 48%,73% 66%,48% 62%,53% 45%)", cx: .63, cy: .48, rotation: 8 },
    { shape: "polygon(75% 32%,100% 38%,100% 72%,73% 66%,78% 48%)", cx: .88, cy: .51, rotation: -6 },
    { shape: "polygon(0 70%,28% 64%,24% 82%,31% 100%,0 100%)", cx: .13, cy: .84, rotation: -9 },
    { shape: "polygon(28% 64%,48% 62%,54% 80%,58% 100%,31% 100%,24% 82%)", cx: .4, cy: .82, rotation: 7 },
    { shape: "polygon(48% 62%,73% 66%,76% 82%,79% 100%,58% 100%,54% 80%)", cx: .64, cy: .83, rotation: -5 },
    { shape: "polygon(73% 66%,100% 72%,100% 100%,79% 100%,76% 82%)", cx: .88, cy: .85, rotation: 9 },
  ];

  const setState = (nextState) => {
    state = nextState;
    root.dataset.interactionState = nextState;
    root.classList.toggle("is-hovering", nextState === "hover");
    root.classList.toggle("is-hinting", nextState === "hinting");
    root.classList.toggle("is-smashing", nextState === "smashing");
    root.classList.toggle("is-revealed", nextState === "revealed");
    root.classList.toggle("is-resetting", nextState === "resetting");
  };

  const setLocalPosition = (x, y) => {
    const rect = root.getBoundingClientRect();
    const boundedX = Math.max(28, Math.min(rect.width - 28, x));
    const boundedY = Math.max(28, Math.min(rect.height - 28, y));
    root.style.setProperty("--hammer-x", `${boundedX}px`);
    root.style.setProperty("--hammer-y", `${boundedY}px`);
    return { x: boundedX / rect.width, y: boundedY / rect.height };
  };

  const setPointerPosition = (clientX, clientY) => {
    const rect = root.getBoundingClientRect();
    return setLocalPosition(clientX - rect.left, clientY - rect.top);
  };

  const clearHint = () => {
    window.clearTimeout(hintStartTimer);
    window.clearTimeout(hintEndTimer);
    hintStartTimer = 0;
    hintEndTimer = 0;
    if (state === "hinting") setState(root.matches(":hover") ? "hover" : "idle");
  };

  const clearTransientTimers = () => {
    [breakTimer, finishTimer, buildCleanupTimer, resetTimer, sceneSwitchTimer].forEach((timer) => window.clearTimeout(timer));
    breakTimer = finishTimer = buildCleanupTimer = resetTimer = sceneSwitchTimer = 0;
  };

  const sceneIndex = (sceneKey = activeScene) => WORKFLOW_SCENE_KEYS.indexOf(sceneKey);

  const updateChapterProgress = () => {
    const currentIndex = sceneIndex();
    progress.textContent = `${currentIndex + 1} / ${WORKFLOW_SCENE_KEYS.length}`;
    tabs.forEach((tab) => {
      const sceneKey = tab.dataset.workflowScene;
      const selected = sceneKey === activeScene;
      const completed = sceneStates[sceneKey].revealed;
      tab.classList.toggle("is-active", selected);
      tab.classList.toggle("is-complete", completed);
      tab.dataset.visited = String(completed);
      tab.dataset.chapterState = selected ? "current" : completed ? "complete" : "pending";
      if (selected) tab.setAttribute("aria-current", "step");
      else tab.removeAttribute("aria-current");
    });
  };

  const updateNextCta = () => {
    const currentIndex = sceneIndex();
    const revealed = sceneStates[activeScene].revealed;
    nextButton.hidden = !revealed;
    if (!revealed) return;
    const nextSceneKey = WORKFLOW_SCENE_KEYS[currentIndex + 1];
    nextButton.dataset.nextWorkflowScene = nextSceneKey || "";
    nextButton.dataset.nextTarget = nextSceneKey ? "workflow" : "projects";
    nextButton.textContent = nextSceneKey
      ? `继续看：${WORKFLOW_SCENES[nextSceneKey].label} →`
      : "继续看项目工坊 →";
  };

  const updateWorkflowChrome = () => {
    updateChapterProgress();
    updateNextCta();
  };

  const setScenePresentation = (sceneKey, animate = false, options = {}) => {
    const scene = WORKFLOW_SCENES[sceneKey];
    const apply = () => {
      if (options.forceOld) sceneStates[sceneKey].revealed = false;
      const revealed = sceneStates[sceneKey].revealed;
      activeScene = sceneKey;
      oldImage.src = scene.oldSrc;
      oldImage.alt = scene.oldAlt;
      aiImage.src = scene.aiSrc;
      aiImage.alt = scene.aiAlt;
      oldLayer.setAttribute("aria-hidden", String(revealed));
      aiLayer.setAttribute("aria-hidden", String(!revealed));
      resetButton.hidden = !revealed;
      root.setAttribute("aria-label", revealed
        ? `当前展示${scene.label}的 AI 辅助流程`
        : `点击敲碎${scene.label}的传统流程，查看 AI 辅助流程`);
      if (revealed) root.setAttribute("aria-disabled", "true");
      else root.removeAttribute("aria-disabled");
      setState(revealed ? "revealed" : "idle");
      status.textContent = `当前展示${scene.label}的${revealed ? "AI 辅助" : "传统"}流程。`;
      updateWorkflowChrome();
      requestAnimationFrame(() => root.classList.remove("is-scene-switching"));
      if (!revealed) playHint();
    };

    if (!animate || reducedMotion.matches) {
      apply();
      return;
    }
    root.classList.add("is-scene-switching");
    sceneSwitchTimer = window.setTimeout(() => {
      apply();
      sceneSwitchTimer = 0;
    }, 220);
  };

  const buildShards = (impact) => {
    shardLayer.innerHTML = "";
    shardShapes.forEach(({ shape, cx, cy, rotation }, index) => {
      const dx = cx - impact.x;
      const dy = cy - impact.y;
      const distance = Math.min(1, Math.hypot(dx, dy));
      const angle = (index / shardShapes.length) * Math.PI * 2;
      const unitX = distance > .04 ? dx / distance : Math.cos(angle);
      const unitY = distance > .04 ? dy / distance : Math.sin(angle);
      const scatterDistance = 48 + (1 - distance) * 44;
      const shard = document.createElement("div");
      shard.className = "prototype-shard";
      shard.style.setProperty("--piece", shape);
      shard.style.setProperty("--scatter-x", `${(unitX * scatterDistance).toFixed(1)}px`);
      shard.style.setProperty("--scatter-y", `${(unitY * scatterDistance + 46).toFixed(1)}px`);
      shard.style.setProperty("--scatter-r", `${rotation + unitX * 3}deg`);
      shard.style.setProperty("--scatter-delay", `${Math.round(distance * 125)}ms`);
      const copy = oldLayer.cloneNode(true);
      copy.removeAttribute("aria-hidden");
      shard.append(copy);
      shardLayer.append(shard);
    });
  };

  const finalizeReveal = () => {
    clearTransientTimers();
    sceneStates[activeScene].revealed = true;
    sceneStates[activeScene].visited = true;
    shardLayer.innerHTML = "";
    root.classList.remove("is-striking", "is-breaking");
    setState("revealed");
    oldLayer.setAttribute("aria-hidden", "true");
    aiLayer.setAttribute("aria-hidden", "false");
    root.setAttribute("aria-label", `当前展示${WORKFLOW_SCENES[activeScene].label}的 AI 辅助流程`);
    root.setAttribute("aria-disabled", "true");
    resetButton.hidden = false;
    status.textContent = `当前展示${WORKFLOW_SCENES[activeScene].label}的 AI 辅助流程。`;
    updateWorkflowChrome();
    buildCleanupTimer = window.setTimeout(() => root.classList.remove("is-building"), reducedMotion.matches ? 1 : 180);
  };

  const revealAiFlow = (event) => {
    if (!["idle", "hover", "hinting"].includes(state)) return;
    sceneStates[activeScene].hinted = true;
    clearHint();
    clearTransientTimers();
    const rect = root.getBoundingClientRect();
    const pointerEvent = Number.isFinite(event?.clientX) && event.clientX > 0;
    const impact = pointerEvent
      ? setPointerPosition(event.clientX, event.clientY)
      : setLocalPosition(rect.width * .54, rect.height * .48);
    setState("smashing");
    root.classList.add("is-striking");
    status.textContent = `正在敲碎${WORKFLOW_SCENES[activeScene].label}的传统流程。`;

    if (reducedMotion.matches) {
      root.classList.add("is-breaking");
      finishTimer = window.setTimeout(finalizeReveal, 280);
      return;
    }
    breakTimer = window.setTimeout(() => {
      buildShards(impact);
      root.classList.add("is-breaking", "is-building");
    }, 250);
    finishTimer = window.setTimeout(finalizeReveal, 1180);
  };

  const resetFlow = () => {
    if (state !== "revealed") return;
    clearHint();
    clearTransientTimers();
    sceneStates[activeScene].revealed = false;
    sceneStates[activeScene].visited = false;
    shardLayer.innerHTML = "";
    root.classList.remove("is-striking", "is-breaking", "is-building");
    setState("resetting");
    resetButton.hidden = true;
    nextButton.hidden = true;
    oldLayer.removeAttribute("aria-hidden");
    aiLayer.setAttribute("aria-hidden", "true");
    root.removeAttribute("aria-disabled");
    root.setAttribute("aria-label", `点击敲碎${WORKFLOW_SCENES[activeScene].label}的传统流程，查看 AI 辅助流程`);
    status.textContent = `当前展示${WORKFLOW_SCENES[activeScene].label}的传统流程。`;
    updateWorkflowChrome();
    resetTimer = window.setTimeout(() => setState("idle"), reducedMotion.matches ? 1 : 240);
    root.focus({ preventScroll: true });
  };

  const playHint = () => {
    const activeState = sceneStates[activeScene];
    if (reducedMotion.matches || activeState.hinted || activeState.revealed || !sectionVisible || state !== "idle") return;
    activeState.hinted = true;
    hintStartTimer = window.setTimeout(() => {
      if (!sectionVisible || sceneStates[activeScene].revealed || state !== "idle") return;
      const rect = root.getBoundingClientRect();
      setLocalPosition(rect.width * .72, rect.height * .31);
      setState("hinting");
      hintEndTimer = window.setTimeout(() => state === "hinting" && setState("idle"), 1050);
    }, 1200);
  };

  const switchScene = (sceneKey, options = {}) => {
    if (!WORKFLOW_SCENE_KEYS.includes(sceneKey) || ["smashing", "resetting"].includes(state)) return false;
    clearHint();
    clearTransientTimers();
    shardLayer.innerHTML = "";
    root.classList.remove("is-striking", "is-breaking", "is-building");
    setScenePresentation(sceneKey, true, options);
    root.focus({ preventScroll: true });
    return true;
  };

  const goToProjects = () => {
    const projects = $("#projects");
    if (!projects) return;
    projects.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
  };

  const goToNextScene = () => {
    const nextSceneKey = WORKFLOW_SCENE_KEYS[sceneIndex() + 1];
    if (nextSceneKey) {
      switchScene(nextSceneKey, { forceOld: true });
      return;
    }
    goToProjects();
  };

  const goToPreviousScene = () => {
    const previousSceneKey = WORKFLOW_SCENE_KEYS[sceneIndex() - 1];
    if (previousSceneKey) switchScene(previousSceneKey);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const sceneKey = tab.dataset.workflowScene;
      if (sceneKey === activeScene) return;
      switchScene(sceneKey);
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      tabs[(index + delta + tabs.length) % tabs.length].focus();
    });
  });

  root.addEventListener("pointerenter", (event) => {
    if (!["idle", "hinting"].includes(state)) return;
    sceneStates[activeScene].hinted = true;
    clearHint();
    setPointerPosition(event.clientX, event.clientY);
    setState("hover");
  });
  root.addEventListener("pointermove", (event) => {
    if (!["idle", "hover", "hinting"].includes(state)) return;
    sceneStates[activeScene].hinted = true;
    clearHint();
    setPointerPosition(event.clientX, event.clientY);
    setState("hover");
  });
  root.addEventListener("pointerleave", () => state === "hover" && setState("idle"));
  root.addEventListener("focus", () => {
    if (state !== "idle") return;
    sceneStates[activeScene].hinted = true;
    clearHint();
    const rect = root.getBoundingClientRect();
    setLocalPosition(rect.width * .54, rect.height * .48);
    setState("hover");
  });
  root.addEventListener("blur", () => state === "hover" && setState("idle"));
  root.addEventListener("click", revealAiFlow);
  root.addEventListener("keydown", (event) => {
    if (!["Enter", " ", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowLeft") {
      goToPreviousScene();
      return;
    }
    if (event.key === "ArrowRight") {
      if (state === "revealed") goToNextScene();
      return;
    }
    if (state === "revealed") goToNextScene();
    else revealAiFlow();
  });
  resetButton.addEventListener("click", resetFlow);
  nextButton.addEventListener("click", goToNextScene);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible = Boolean(entry?.isIntersecting);
      if (sectionVisible) playHint();
      else {
        clearHint();
        if (state === "hover") setState("idle");
        if (state === "smashing") finalizeReveal();
      }
    }, { threshold: .55 });
    observer.observe(section);
  } else {
    sectionVisible = true;
    playHint();
  }

  setScenePresentation(activeScene);
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
    .map(
      (project, index) => (index === featuredIndex ? "" : projectTemplate(project, index))
    )
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
    openModal(modal);
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
    openModal($("#mbtiModal"));
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
  let bubbleTimer = null;
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
    window.clearTimeout(bubbleTimer);
    bubble.classList.add("show");
    bubbleTimer = window.setTimeout(() => bubble.classList.remove("show"), 2600);
  });
}

function setupDrag() {
  const doll = $("#doll");
  const stage = $("#welcome");
  let dragging = false;
  let activePointerId = null;
  let offsetX = 0;
  let offsetY = 0;
  let nextLeft = 0;
  let nextTop = 0;
  let frame = null;

  const clampToStage = (event) => {
    const stageRect = stage.getBoundingClientRect();
    const dollRect = doll.getBoundingClientRect();
    nextLeft = Math.max(8, Math.min(event.clientX - stageRect.left - offsetX, stageRect.width - dollRect.width - 8));
    nextTop = Math.max(8, Math.min(event.clientY - stageRect.top - offsetY, stageRect.height - dollRect.height - 8));
  };

  const applyDrag = () => {
    doll.style.left = `${nextLeft}px`;
    doll.style.top = `${nextTop}px`;
    frame = null;
  };

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
    clampToStage(event);
  });

  window.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== activePointerId) return;
    event.preventDefault();
    clampToStage(event);
    if (!frame) frame = window.requestAnimationFrame(applyDrag);
  });

  const stopDrag = () => {
    if (!dragging) return;
    if (frame) {
      window.cancelAnimationFrame(frame);
      applyDrag();
    }
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
  const dock = $(".dock-nav");
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("active", link.dataset.nav === visible.target.id));
      dock?.classList.toggle("is-compact", visible.target.id !== "welcome");
    },
    { rootMargin: "-25% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
  );
  sections.forEach((section) => observer.observe(section));
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
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const maxWidth = width * 0.94;
    let fontSize = Math.max(54, Math.min(126, width / 8.7));
    do {
      ctx.font = `900 ${fontSize}px "Trebuchet MS", Arial`;
      fontSize -= 2;
    } while (ctx.measureText(text).width > maxWidth && fontSize > 44);
    ctx.fillText(text, width / 2, height / 2);
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

  function draw() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "#0757f7";
    particles.forEach((particle) => {
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 84) {
        const force = (84 - dist) / 84;
        particle.vx += (dx / (dist || 1)) * force * 2.15;
        particle.vy += (dy / (dist || 1)) * force * 2.15;
      }
      particle.vx += (particle.homeX - particle.x) * 0.036;
      particle.vy += (particle.homeY - particle.y) * 0.036;
      particle.vx *= 0.86;
      particle.vy *= 0.86;
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
setupModalBehavior();
setupWorkflowMap();
setupExperienceDetails();
setupExperienceEntrance();
setupProjects();
setupMbti();
setupCat();
setupDrag();
setupNav();
setupParticles();
