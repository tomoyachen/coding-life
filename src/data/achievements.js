import {map} from '../functions/util.js';

const achievementList = [
  {
    id: 101,
    name: "既视感",
    description: "重开10次",
    grade: 0,
    condition: "TMS>9",
    hide: 0,
    opportunity: "END"
  },
  {
    id: 102,
    name: '渣男一枚',
    description: '出轨',
    grade: 1,
    condition: 'EVT?[131102]',
    hide: 0,
    opportunity: 'TRAJECTORY',
  },
  {
    id: 103,
    name: '出柜',
    description: '女装大佬出柜',
    grade: 0,
    condition: 'EVT?[150024]',
    hide: 0,
    opportunity: 'TRAJECTORY',
  },
  {
    id: 104,
    name: '跨性别',
    description: '女装大佬的不归路',
    grade: 2,
    condition: 'EVT?[150023]',
    hide: 1,
    opportunity: 'TRAJECTORY',
  },
  {
    id: 105,
    name: "契而不舍",
    description: "重开50次",
    grade: 1,
    condition: "TMS>49",
    hide: 0,
    opportunity: "END"
  },
  {
    id: 106,
    name: '钢铁直男',
    description: '拒绝恋爱...',
    grade: 1,
    condition: '(EVT?[131101])&(TLT?[1054])',
    hide: 0,
    opportunity: 'TRAJECTORY',
  },
  {
    id: 107,
    name: "码农强迫症",
    description: "重开200次",
    grade: 2,
    condition: "TMS>199",
    hide: 0,
    opportunity: "END"
  },
  {
    id: 108,
    name: "真爱不用说",
    description: "重开500次",
    grade: 3,
    condition: "TMS>499",
    hide: 0,
    opportunity: "END"
  },
  {
    id: 109,
    name: "高工",
    description: "晋升到P7",
    grade: 1,
    condition: "EVT?[391007]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 110,
    name: "技术专家",
    description: "晋升到P8",
    grade: 1,
    condition: "EVT?[391008]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 111,
    name: "架构师",
    description: "晋升到P9",
    grade: 2,
    condition: "EVT?[391009]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 112,
    name: "架构师II",
    description: "晋升到P10",
    grade: 2,
    condition: "EVT?[391010]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 113,
    name: "CTO-1",
    description: "晋升到P11",
    grade: 3,
    condition: "EVT?[391011]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 114,
    name: "CTO",
    description: "晋升到P12",
    grade: 3,
    condition: "EVT?[391012]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 115,
    name: "嫁给他",
    description: "性别而已，不要卡那么死~",
    grade: 2,
    condition: "EVT?[900014]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 116,
    name: "颜如玉",
    description: "颜值>10",
    grade: 0,
    condition: "CHR>10",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 117,
    name: "天生我才",
    description: "智商>10",
    grade: 0,
    condition: "INT>10",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 118,
    name: "四肢发达",
    description: "健康>10",
    grade: 0,
    condition: "STR>10",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 119,
    name: "看破红尘",
    description: "心态>10",
    grade: 0,
    condition: "SPR>10",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 120,
    name: "福星高照",
    description: "幸运>3",
    grade: 1,
    condition: "BLCK>3",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 121,
    name: "天道之子",
    description: "幸运>4",
    grade: 2,
    condition: "BLCK>4",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 122,
    name: "位面之子",
    description: "幸运>5",
    grade: 3,
    condition: "BLCK>5",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 123,
    name: "平行宇宙",
    description: "原来平行宇宙是真的？？！",
    grade: 0,
    condition: "EVT?[1110000]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 124,
    name: "葫芦娃",
    description: "葫芦娃，一根藤上七朵花。",
    grade: 1,
    condition: "EVT?[1110001]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 125,
    name: "齐天大圣",
    description: "孙悟空加入。",
    grade: 3,
    condition: "EVT?[1111008,1111009]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 126,
    name: "救世主",
    description: "你拯救了世界。",
    grade: 3,
    condition: "EVT?[1111011,1111012]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 127,
    name: "末日英雄",
    description: "你试图拯救世界，但没有成功。",
    grade: 3,
    condition: "EVT?[1111010]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 128,
    name: "受虐狂",
    description: "你因为不用加班而不开心。",
    grade: 2,
    condition: "EVT?[850053]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 129,
    name: "抢月饼",
    description: "抢月饼会发生什么呢？",
    grade: 1,
    condition: "EVT?[130000]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 130,
    name: "脑门闪亮",
    description: "秃头也挡不住你的颜值。",
    grade: 0,
    condition: "EVT?[500002]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 131,
    name: "为了颜值",
    description: "你用雌激素治疗脱发。",
    grade: 1,
    condition: "EVT?[510003]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 132,
    name: "美丽的代价",
    description: "用雌激素结果变性。",
    grade: 2,
    condition: "EVT?[510004]",
    hide: 1,
    opportunity: "TRAJECTORY"
  },
  {
    id: 133,
    name: "有房有车",
    description: "买了房也买了车。",
    grade: 1,
    condition: "(EVT?[400017])&(EVT?[400005,400105])",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 134,
    name: "五子登科",
    description: "有房、有车、结婚、有娃、有钱",
    grade: 2,
    condition: "(EVT?[400017])&(EVT?[400005,400105])&(EVT?[220003,220004])&(MNY>5)",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 135,
    name: "黄袍加身",
    description: "退休后去送外卖",
    grade: 1,
    condition: "EVT?[999115]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 136,
    name: "自恋狂",
    description: "喜欢照镜子",
    grade: 1,
    condition: "EVT?[880005,870011]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 137,
    name: "提桶跑路",
    description: "工作不到一年就离开了行业。",
    grade: 0,
    condition: "AGE<13",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 138,
    name: "光荣退休",
    description: "你在行业工作满50年。",
    grade: 3,
    condition: "AGE>599",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 139,
    name: "十年一梦",
    description: "坚持了十年，最终离开行业。",
    grade: 0,
    condition: "EVT?[999001,999002,999003]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 140,
    name: "廿年终悔",
    description: "坚持了二十年，最终离开行业。",
    grade: 1,
    condition: "EVT?[999004,999005,999006]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 141,
    name: "卅年人生",
    description: "坚持了三十年，最终离开行业。",
    grade: 2,
    condition: "EVT?[999007,999008,999009]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 142,
    name: "成功上岸",
    description: "你财务自由退休。",
    grade: 1,
    condition: "EVT?[999010]",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 143,
    name: "跳槽一时爽",
    description: "跳槽达到5次。",
    grade: 1,
    condition: "JUMP>4",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 144,
    name: "白白胖胖",
    description: "你最可爱。",
    grade: 1,
    condition: "(EVT?[850070])&(EVT?[850071])&(EVT?[850072,850073])",
    hide: 0,
    opportunity: "TRAJECTORY"
  },
  {
    id: 145,
    name: '科学家',
    description: '你转行成为科学家。',
    grade: 1,
    condition: 'EVT?[999100,900009]',
  },
  {
    id: 146,
    name: '悲惨人生',
    description: '你在工作中死了。',
    grade: 1,
    condition: 'EVT?[900008,999999,800000,900001,900011,400016]',
  },
  {
    id: 147,
    name: '股票帝',
    description: '你在股票市场赚了大钱。',
    grade: 2,
    condition: 'EVT?[420008]'
  },
  {
    id: 148,
    name: '老韭菜',
    description: '老股民，在股票市场被收割。',
    grade: 2,
    condition: 'EVT?[400014]&EVT?[420000,420001,420004,420009]'
  }
];

export const achievements = map(achievementList);