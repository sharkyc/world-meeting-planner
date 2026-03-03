import { create } from 'zustand';
import { DateTime } from 'luxon';

// 城市数据接口
export const cityData = [
  // 中国
  { id: 'beijing', name: '北京', nameEn: 'Beijing', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'shanghai', name: '上海', nameEn: 'Shanghai', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'hongkong', name: '香港', nameEn: 'Hong Kong', country: '中国', timezone: 'Asia/Hong_Kong' },
  { id: 'taipei', name: '台北', nameEn: 'Taipei', country: '中国台湾', timezone: 'Asia/Taipei' },
  { id: 'guangzhou', name: '广州', nameEn: 'Guangzhou', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'shenzhen', name: '深圳', nameEn: 'Shenzhen', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'chengdu', name: '成都', nameEn: 'Chengdu', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'hangzhou', name: '杭州', nameEn: 'Hangzhou', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'xian', name: '西安', nameEn: 'Xi\'an', country: '中国', timezone: 'Asia/Shanghai' },
  { id: 'wuhan', name: '武汉', nameEn: 'Wuhan', country: '中国', timezone: 'Asia/Shanghai' },

  // 亚洲
  { id: 'tokyo', name: '东京', nameEn: 'Tokyo', country: '日本', timezone: 'Asia/Tokyo' },
  { id: 'osaka', name: '大阪', nameEn: 'Osaka', country: '日本', timezone: 'Asia/Tokyo' },
  { id: 'seoul', name: '首尔', nameEn: 'Seoul', country: '韩国', timezone: 'Asia/Seoul' },
  { id: 'singapore', name: '新加坡', nameEn: 'Singapore', country: '新加坡', timezone: 'Asia/Singapore' },
  { id: 'bangkok', name: '曼谷', nameEn: 'Bangkok', country: '泰国', timezone: 'Asia/Bangkok' },
  { id: 'kualalumpur', name: '吉隆坡', nameEn: 'Kuala Lumpur', country: '马来西亚', timezone: 'Asia/Kuala_Lumpur' },
  { id: 'jakarta', name: '雅加达', nameEn: 'Jakarta', country: '印度尼西亚', timezone: 'Asia/Jakarta' },
  { id: 'manila', name: '马尼拉', nameEn: 'Manila', country: '菲律宾', timezone: 'Asia/Manila' },
  { id: 'hanoi', name: '河内', nameEn: 'Hanoi', country: '越南', timezone: 'Asia/Ho_Chi_Minh' },
  { id: 'hochiminh', name: '胡志明市', nameEn: 'Ho Chi Minh City', country: '越南', timezone: 'Asia/Ho_Chi_Minh' },
  { id: 'yangon', name: '仰光', nameEn: 'Yangon', country: '缅甸', timezone: 'Asia/Yangon' },
  { id: 'phnompenh', name: '金边', nameEn: 'Phnom Penh', country: '柬埔寨', timezone: 'Asia/Phnom_Penh' },
  { id: 'vientiane', name: '万象', nameEn: 'Vientiane', country: '老挝', timezone: 'Asia/Vientiane' },
  { id: 'bandarseribegawan', name: '斯里巴加湾市', nameEn: 'Bandar Seri Begawan', country: '文莱', timezone: 'Asia/Brunei' },
  { id: 'kathmandu', name: '加德满都', nameEn: 'Kathmandu', country: '尼泊尔', timezone: 'Asia/Kathmandu' },
  { id: 'dhaka', name: '达卡', nameEn: 'Dhaka', country: '孟加拉国', timezone: 'Asia/Dhaka' },
  { id: 'colombo', name: '科伦坡', nameEn: 'Colombo', country: '斯里兰卡', timezone: 'Asia/Colombo' },
  { id: 'male', name: '马累', nameEn: 'Male', country: '马尔代夫', timezone: 'Indian/Maldives' },
  { id: 'islamabad', name: '伊斯兰堡', nameEn: 'Islamabad', country: '巴基斯坦', timezone: 'Asia/Karachi' },
  { id: 'karachi', name: '卡拉奇', nameEn: 'Karachi', country: '巴基斯坦', timezone: 'Asia/Karachi' },
  { id: 'kabul', name: '喀布尔', nameEn: 'Kabul', country: '阿富汗', timezone: 'Asia/Kabul' },
  { id: 'dushanbe', name: '杜尚别', nameEn: 'Dushanbe', country: '塔吉克斯坦', timezone: 'Asia/Dushanbe' },
  { id: 'bishkek', name: '比什凯克', nameEn: 'Bishkek', country: '吉尔吉斯斯坦', timezone: 'Asia/Bishkek' },
  { id: 'almaty', name: '阿拉木图', nameEn: 'Almaty', country: '哈萨克斯坦', timezone: 'Asia/Almaty' },
  { id: 'astana', name: '阿斯塔纳', nameEn: 'Astana', country: '哈萨克斯坦', timezone: 'Asia/Almaty' },
  { id: 'tashkent', name: '塔什干', nameEn: 'Tashkent', country: '乌兹别克斯坦', timezone: 'Asia/Tashkent' },
  { id: 'ashgabat', name: '阿什哈巴德', nameEn: 'Ashgabat', country: '土库曼斯坦', timezone: 'Asia/Ashgabat' },
  { id: 'yerevan', name: '埃里温', nameEn: 'Yerevan', country: '亚美尼亚', timezone: 'Asia/Yerevan' },
  { id: 'tbilisi', name: '第比利斯', nameEn: 'Tbilisi', country: '格鲁吉亚', timezone: 'Asia/Tbilisi' },
  { id: 'baku', name: '巴库', nameEn: 'Baku', country: '阿塞拜疆', timezone: 'Asia/Baku' },
  { id: 'mumbai', name: '孟买', nameEn: 'Mumbai', country: '印度', timezone: 'Asia/Kolkata' },
  { id: 'delhi', name: '德里', nameEn: 'Delhi', country: '印度', timezone: 'Asia/Kolkata' },
  { id: 'bangalore', name: '班加罗尔', nameEn: 'Bangalore', country: '印度', timezone: 'Asia/Kolkata' },
  { id: 'chennai', name: '钦奈', nameEn: 'Chennai', country: '印度', timezone: 'Asia/Kolkata' },
  { id: 'hyderabad', name: '海德拉巴', nameEn: 'Hyderabad', country: '印度', timezone: 'Asia/Kolkata' },
  { id: 'dubai', name: '迪拜', nameEn: 'Dubai', country: '阿联酋', timezone: 'Asia/Dubai' },
  { id: 'abudhabi', name: '阿布扎比', nameEn: 'Abu Dhabi', country: '阿联酋', timezone: 'Asia/Dubai' },
  { id: 'doha', name: '多哈', nameEn: 'Doha', country: '卡塔尔', timezone: 'Asia/Qatar' },
  { id: 'riyadh', name: '利雅得', nameEn: 'Riyadh', country: '沙特阿拉伯', timezone: 'Asia/Riyadh' },
  { id: 'jeddah', name: '吉达', nameEn: 'Jeddah', country: '沙特阿拉伯', timezone: 'Asia/Riyadh' },
  { id: 'kuwaitcity', name: '科威特城', nameEn: 'Kuwait City', country: '科威特', timezone: 'Asia/Kuwait' },
  { id: 'manama', name: '麦纳麦', nameEn: 'Manama', country: '巴林', timezone: 'Asia/Bahrain' },
  { id: 'muscat', name: '马斯喀特', nameEn: 'Muscat', country: '阿曼', timezone: 'Asia/Muscat' },
  { id: 'telaviv', name: '特拉维夫', nameEn: 'Tel Aviv', country: '以色列', timezone: 'Asia/Jerusalem' },
  { id: 'jerusalem', name: '耶路撒冷', nameEn: 'Jerusalem', country: '以色列', timezone: 'Asia/Jerusalem' },
  { id: 'amman', name: '安曼', nameEn: 'Amman', country: '约旦', timezone: 'Asia/Amman' },
  { id: 'beirut', name: '贝鲁特', nameEn: 'Beirut', country: '黎巴嫩', timezone: 'Asia/Beirut' },
  { id: 'ankara', name: '安卡拉', nameEn: 'Ankara', country: '土耳其', timezone: 'Europe/Istanbul' },
  { id: 'istanbul', name: '伊斯坦布尔', nameEn: 'Istanbul', country: '土耳其', timezone: 'Europe/Istanbul' },
  { id: 'nicosia', name: '尼科西亚', nameEn: 'Nicosia', country: '塞浦路斯', timezone: 'Asia/Nicosia' },

  // 欧洲
  { id: 'london', name: '伦敦', nameEn: 'London', country: '英国', timezone: 'Europe/London' },
  { id: 'manchester', name: '曼彻斯特', nameEn: 'Manchester', country: '英国', timezone: 'Europe/London' },
  { id: 'edinburgh', name: '爱丁堡', nameEn: 'Edinburgh', country: '英国', timezone: 'Europe/London' },
  { id: 'paris', name: '巴黎', nameEn: 'Paris', country: '法国', timezone: 'Europe/Paris' },
  { id: 'lyon', name: '里昂', nameEn: 'Lyon', country: '法国', timezone: 'Europe/Paris' },
  { id: 'marseille', name: '马赛', nameEn: 'Marseille', country: '法国', timezone: 'Europe/Paris' },
  { id: 'berlin', name: '柏林', nameEn: 'Berlin', country: '德国', timezone: 'Europe/Berlin' },
  { id: 'munich', name: '慕尼黑', nameEn: 'Munich', country: '德国', timezone: 'Europe/Berlin' },
  { id: 'frankfurt', name: '法兰克福', nameEn: 'Frankfurt', country: '德国', timezone: 'Europe/Berlin' },
  { id: 'hamburg', name: '汉堡', nameEn: 'Hamburg', country: '德国', timezone: 'Europe/Berlin' },
  { id: 'amsterdam', name: '阿姆斯特丹', nameEn: 'Amsterdam', country: '荷兰', timezone: 'Europe/Amsterdam' },
  { id: 'rotterdam', name: '鹿特丹', nameEn: 'Rotterdam', country: '荷兰', timezone: 'Europe/Amsterdam' },
  { id: 'rome', name: '罗马', nameEn: 'Rome', country: '意大利', timezone: 'Europe/Rome' },
  { id: 'milan', name: '米兰', nameEn: 'Milan', country: '意大利', timezone: 'Europe/Rome' },
  { id: 'venice', name: '威尼斯', nameEn: 'Venice', country: '意大利', timezone: 'Europe/Rome' },
  { id: 'florence', name: '佛罗伦萨', nameEn: 'Florence', country: '意大利', timezone: 'Europe/Rome' },
  { id: 'madrid', name: '马德里', nameEn: 'Madrid', country: '西班牙', timezone: 'Europe/Madrid' },
  { id: 'barcelona', name: '巴塞罗那', nameEn: 'Barcelona', country: '西班牙', timezone: 'Europe/Madrid' },
  { id: 'valencia', name: '瓦伦西亚', nameEn: 'Valencia', country: '西班牙', timezone: 'Europe/Madrid' },
  { id: 'seville', name: '塞维利亚', nameEn: 'Seville', country: '西班牙', timezone: 'Europe/Madrid' },
  { id: 'lisbon', name: '里斯本', nameEn: 'Lisbon', country: '葡萄牙', timezone: 'Europe/Lisbon' },
  { id: 'porto', name: '波尔图', nameEn: 'Porto', country: '葡萄牙', timezone: 'Europe/Lisbon' },
  { id: 'vienna', name: '维也纳', nameEn: 'Vienna', country: '奥地利', timezone: 'Europe/Vienna' },
  { id: 'salzburg', name: '萨尔茨堡', nameEn: 'Salzburg', country: '奥地利', timezone: 'Europe/Vienna' },
  { id: 'zurich', name: '苏黎世', nameEn: 'Zurich', country: '瑞士', timezone: 'Europe/Zurich' },
  { id: 'geneva', name: '日内瓦', nameEn: 'Geneva', country: '瑞士', timezone: 'Europe/Zurich' },
  { id: 'basel', name: '巴塞尔', nameEn: 'Basel', country: '瑞士', timezone: 'Europe/Zurich' },
  { id: 'stockholm', name: '斯德哥尔摩', nameEn: 'Stockholm', country: '瑞典', timezone: 'Europe/Stockholm' },
  { id: 'gothenburg', name: '哥德堡', nameEn: 'Gothenburg', country: '瑞典', timezone: 'Europe/Stockholm' },
  { id: 'oslo', name: '奥斯陆', nameEn: 'Oslo', country: '挪威', timezone: 'Europe/Oslo' },
  { id: 'bergen', name: '卑尔根', nameEn: 'Bergen', country: '挪威', timezone: 'Europe/Oslo' },
  { id: 'copenhagen', name: '哥本哈根', nameEn: 'Copenhagen', country: '丹麦', timezone: 'Europe/Copenhagen' },
  { id: 'aarhus', name: '奥胡斯', nameEn: 'Aarhus', country: '丹麦', timezone: 'Europe/Copenhagen' },
  { id: 'helsinki', name: '赫尔辛基', nameEn: 'Helsinki', country: '芬兰', timezone: 'Europe/Helsinki' },
  { id: 'reykjavik', name: '雷克雅未克', nameEn: 'Reykjavik', country: '冰岛', timezone: 'Atlantic/Reykjavik' },
  { id: 'tallinn', name: '塔林', nameEn: 'Tallinn', country: '爱沙尼亚', timezone: 'Europe/Tallinn' },
  { id: 'riga', name: '里加', nameEn: 'Riga', country: '拉脱维亚', timezone: 'Europe/Riga' },
  { id: 'vilnius', name: '维尔纽斯', nameEn: 'Vilnius', country: '立陶宛', timezone: 'Europe/Vilnius' },
  { id: 'moscow', name: '莫斯科', nameEn: 'Moscow', country: '俄罗斯', timezone: 'Europe/Moscow' },
  { id: 'stpetersburg', name: '圣彼得堡', nameEn: 'St. Petersburg', country: '俄罗斯', timezone: 'Europe/Moscow' },
  { id: 'sochi', name: '索契', nameEn: 'Sochi', country: '俄罗斯', timezone: 'Europe/Moscow' },
  { id: 'warsaw', name: '华沙', nameEn: 'Warsaw', country: '波兰', timezone: 'Europe/Warsaw' },
  { id: 'krakow', name: '克拉科夫', nameEn: 'Krakow', country: '波兰', timezone: 'Europe/Warsaw' },
  { id: 'prague', name: '布拉格', nameEn: 'Prague', country: '捷克', timezone: 'Europe/Prague' },
  { id: 'brno', name: '布尔诺', nameEn: 'Brno', country: '捷克', timezone: 'Europe/Prague' },
  { id: 'budapest', name: '布达佩斯', nameEn: 'Budapest', country: '匈牙利', timezone: 'Europe/Budapest' },
  { id: 'debrecen', name: '德布勒森', nameEn: 'Debrecen', country: '匈牙利', timezone: 'Europe/Budapest' },
  { id: 'bucharest', name: '布加勒斯特', nameEn: 'Bucharest', country: '罗马尼亚', timezone: 'Europe/Bucharest' },
  { id: 'clujnapoca', name: '克卢日-纳波卡', nameEn: 'Cluj-Napoca', country: '罗马尼亚', timezone: 'Europe/Bucharest' },
  { id: 'sofia', name: '索非亚', nameEn: 'Sofia', country: '保加利亚', timezone: 'Europe/Sofia' },
  { id: 'plovdiv', name: '普罗夫迪夫', nameEn: 'Plovdiv', country: '保加利亚', timezone: 'Europe/Sofia' },
  { id: 'belgrade', name: '贝尔格莱德', nameEn: 'Belgrade', country: '塞尔维亚', timezone: 'Europe/Belgrade' },
  { id: 'novisad', name: '诺维萨德', nameEn: 'Novi Sad', country: '塞尔维亚', timezone: 'Europe/Belgrade' },
  { id: 'zagreb', name: '萨格勒布', nameEn: 'Zagreb', country: '克罗地亚', timezone: 'Europe/Zagreb' },
  { id: 'split', name: '斯普利特', nameEn: 'Split', country: '克罗地亚', timezone: 'Europe/Zagreb' },
  { id: 'athens', name: '雅典', nameEn: 'Athens', country: '希腊', timezone: 'Europe/Athens' },
  { id: 'thessaloniki', name: '塞萨洛尼基', nameEn: 'Thessaloniki', country: '希腊', timezone: 'Europe/Athens' },

  // 北美洲
  { id: 'newyork', name: '纽约', nameEn: 'New York', country: '美国', timezone: 'America/New_York' },
  { id: 'losangeles', name: '洛杉矶', nameEn: 'Los Angeles', country: '美国', timezone: 'America/Los_Angeles' },
  { id: 'chicago', name: '芝加哥', nameEn: 'Chicago', country: '美国', timezone: 'America/Chicago' },
  { id: 'sanfrancisco', name: '旧金山', nameEn: 'San Francisco', country: '美国', timezone: 'America/Los_Angeles' },
  { id: 'seattle', name: '西雅图', nameEn: 'Seattle', country: '美国', timezone: 'America/Los_Angeles' },
  { id: 'boston', name: '波士顿', nameEn: 'Boston', country: '美国', timezone: 'America/New_York' },
  { id: 'washington', name: '华盛顿', nameEn: 'Washington', country: '美国', timezone: 'America/New_York' },
  { id: 'miami', name: '迈阿密', nameEn: 'Miami', country: '美国', timezone: 'America/New_York' },
  { id: 'atlanta', name: '亚特兰大', nameEn: 'Atlanta', country: '美国', timezone: 'America/New_York' },
  { id: 'dallas', name: '达拉斯', nameEn: 'Dallas', country: '美国', timezone: 'America/Chicago' },
  { id: 'houston', name: '休斯顿', nameEn: 'Houston', country: '美国', timezone: 'America/Chicago' },
  { id: 'denver', name: '丹佛', nameEn: 'Denver', country: '美国', timezone: 'America/Denver' },
  { id: 'phoenix', name: '凤凰城', nameEn: 'Phoenix', country: '美国', timezone: 'America/Phoenix' },
  { id: 'lasvegas', name: '拉斯维加斯', nameEn: 'Las Vegas', country: '美国', timezone: 'America/Los_Angeles' },
  { id: 'portland', name: '波特兰', nameEn: 'Portland', country: '美国', timezone: 'America/Los_Angeles' },
  { id: 'san Diego', name: '圣地亚哥', nameEn: 'San Diego', country: '美国', timezone: 'America/Los_Angeles' },
  { id: 'minneapolis', name: '明尼阿波利斯', nameEn: 'Minneapolis', country: '美国', timezone: 'America/Chicago' },
  { id: 'detroit', name: '底特律', nameEn: 'Detroit', country: '美国', timezone: 'America/Detroit' },
  { id: 'philadelphia', name: '费城', nameEn: 'Philadelphia', country: '美国', timezone: 'America/New_York' },
  { id: 'toronto', name: '多伦多', nameEn: 'Toronto', country: '加拿大', timezone: 'America/Toronto' },
  { id: 'vancouver', name: '温哥华', nameEn: 'Vancouver', country: '加拿大', timezone: 'America/Vancouver' },
  { id: 'montreal', name: '蒙特利尔', nameEn: 'Montreal', country: '加拿大', timezone: 'America/Montreal' },
  { id: 'calgary', name: '卡尔加里', nameEn: 'Calgary', country: '加拿大', timezone: 'America/Edmonton' },
  { id: 'ottawa', name: '渥太华', nameEn: 'Ottawa', country: '加拿大', timezone: 'America/Toronto' },
  { id: 'mexicocity', name: '墨西哥城', nameEn: 'Mexico City', country: '墨西哥', timezone: 'America/Mexico_City' },
  { id: 'cancun', name: '坎昆', nameEn: 'Cancun', country: '墨西哥', timezone: 'America/Cancun' },
  { id: 'guadalajara', name: '瓜达拉哈拉', nameEn: 'Guadalajara', country: '墨西哥', timezone: 'America/Mexico_City' },
  { id: 'havanna', name: '哈瓦那', nameEn: 'Havana', country: '古巴', timezone: 'America/Havana' },
  { id: 'kingston', name: '金斯敦', nameEn: 'Kingston', country: '牙买加', timezone: 'America/Jamaica' },
  { id: 'sanjuan', name: '圣胡安', nameEn: 'San Juan', country: '波多黎各', timezone: 'America/Puerto_Rico' },
  { id: 'panamacity', name: '巴拿马城', nameEn: 'Panama City', country: '巴拿马', timezone: 'America/Panama' },

  // 南美洲
  { id: 'saopaulo', name: '圣保罗', nameEn: 'São Paulo', country: '巴西', timezone: 'America/Sao_Paulo' },
  { id: 'riodejaneiro', name: '里约热内卢', nameEn: 'Rio de Janeiro', country: '巴西', timezone: 'America/Sao_Paulo' },
  { id: 'brazilia', name: '巴西利亚', nameEn: 'Brasília', country: '巴西', timezone: 'America/Sao_Paulo' },
  { id: 'buenosaires', name: '布宜诺斯艾利斯', nameEn: 'Buenos Aires', country: '阿根廷', timezone: 'America/Argentina/Buenos_Aires' },
  { id: 'cordoba', name: '科尔多瓦', nameEn: 'Córdoba', country: '阿根廷', timezone: 'America/Argentina/Cordoba' },
  { id: 'santiago', name: '圣地亚哥', nameEn: 'Santiago', country: '智利', timezone: 'America/Santiago' },
  { id: 'valparaiso', name: '瓦尔帕莱索', nameEn: 'Valparaíso', country: '智利', timezone: 'America/Santiago' },
  { id: 'lima', name: '利马', nameEn: 'Lima', country: '秘鲁', timezone: 'America/Lima' },
  { id: 'cusco', name: '库斯科', nameEn: 'Cusco', country: '秘鲁', timezone: 'America/Lima' },
  { id: 'bogota', name: '波哥大', nameEn: 'Bogotá', country: '哥伦比亚', timezone: 'America/Bogota' },
  { id: 'medellin', name: '麦德林', nameEn: 'Medellín', country: '哥伦比亚', timezone: 'America/Bogota' },
  { id: 'caracas', name: '加拉加斯', nameEn: 'Caracas', country: '委内瑞拉', timezone: 'America/Caracas' },
  { id: 'quito', name: '基多', nameEn: 'Quito', country: '厄瓜多尔', timezone: 'America/Guayaquil' },
  { id: 'guayaquil', name: '瓜亚基尔', nameEn: 'Guayaquil', country: '厄瓜多尔', timezone: 'America/Guayaquil' },
  { id: 'lapaz', name: '拉巴斯', nameEn: 'La Paz', country: '玻利维亚', timezone: 'America/La_Paz' },
  { id: 'sucre', name: '苏克雷', nameEn: 'Sucre', country: '玻利维亚', timezone: 'America/La_Paz' },
  { id: 'asuncion', name: '亚松森', nameEn: 'Asunción', country: '巴拉圭', timezone: 'America/Asuncion' },
  { id: 'montevideo', name: '蒙得维的亚', nameEn: 'Montevideo', country: '乌拉圭', timezone: 'America/Montevideo' },
  { id: 'georgetown', name: '乔治敦', nameEn: 'Georgetown', country: '圭亚那', timezone: 'America/Guyana' },
  { id: 'paramaribo', name: '帕拉马里博', nameEn: 'Paramaribo', country: '苏里南', timezone: 'America/Paramaribo' },
  { id: 'cayenne', name: '卡宴', nameEn: 'Cayenne', country: '法属圭亚那', timezone: 'America/Cayenne' },

  // 非洲
  { id: 'cairo', name: '开罗', nameEn: 'Cairo', country: '埃及', timezone: 'Africa/Cairo' },
  { id: 'alexandria', name: '亚历山大', nameEn: 'Alexandria', country: '埃及', timezone: 'Africa/Cairo' },
  { id: 'johannesburg', name: '约翰内斯堡', nameEn: 'Johannesburg', country: '南非', timezone: 'Africa/Johannesburg' },
  { id: 'capetown', name: '开普敦', nameEn: 'Cape Town', country: '南非', timezone: 'Africa/Johannesburg' },
  { id: 'durban', name: '德班', nameEn: 'Durban', country: '南非', timezone: 'Africa/Johannesburg' },
  { id: 'lagos', name: '拉各斯', nameEn: 'Lagos', country: '尼日利亚', timezone: 'Africa/Lagos' },
  { id: 'abuja', name: '阿布贾', nameEn: 'Abuja', country: '尼日利亚', timezone: 'Africa/Lagos' },
  { id: 'kano', name: '卡诺', nameEn: 'Kano', country: '尼日利亚', timezone: 'Africa/Lagos' },
  { id: 'nairobi', name: '内罗毕', nameEn: 'Nairobi', country: '肯尼亚', timezone: 'Africa/Nairobi' },
  { id: 'mombasa', name: '蒙巴萨', nameEn: 'Mombasa', country: '肯尼亚', timezone: 'Africa/Nairobi' },
  { id: 'accra', name: '阿克拉', nameEn: 'Accra', country: '加纳', timezone: 'Africa/Accra' },
  { id: 'kumasi', name: '库马西', nameEn: 'Kumasi', country: '加纳', timezone: 'Africa/Accra' },
  { id: 'casablanca', name: '卡萨布兰卡', nameEn: 'Casablanca', country: '摩洛哥', timezone: 'Africa/Casablanca' },
  { id: 'rabat', name: '拉巴特', nameEn: 'Rabat', country: '摩洛哥', timezone: 'Africa/Casablanca' },
  { id: 'marrakech', name: '马拉喀什', nameEn: 'Marrakech', country: '摩洛哥', timezone: 'Africa/Casablanca' },
  { id: 'algiers', name: '阿尔及尔', nameEn: 'Algiers', country: '阿尔及利亚', timezone: 'Africa/Algiers' },
  { id: 'tunis', name: '突尼斯', nameEn: 'Tunis', country: '突尼斯', timezone: 'Africa/Tunis' },
  { id: 'tripoli', name: '的黎波里', nameEn: 'Tripoli', country: '利比亚', timezone: 'Africa/Tripoli' },
  { id: 'khartoum', name: '喀土穆', nameEn: 'Khartoum', country: '苏丹', timezone: 'Africa/Khartoum' },
  { id: 'addisababa', name: '亚的斯亚贝巴', nameEn: 'Addis Ababa', country: '埃塞俄比亚', timezone: 'Africa/Addis_Ababa' },
  { id: 'darer salaam', name: '达累斯萨拉姆', nameEn: 'Dar es Salaam', country: '坦桑尼亚', timezone: 'Africa/Dar_es_Salaam' },
  { id: 'kampala', name: '坎帕拉', nameEn: 'Kampala', country: '乌干达', timezone: 'Africa/Kampala' },
  { id: 'harare', name: '哈拉雷', nameEn: 'Harare', country: '津巴布韦', timezone: 'Africa/Harare' },
  { id: 'lusaka', name: '卢萨卡', nameEn: 'Lusaka', country: '赞比亚', timezone: 'Africa/Lusaka' },
  { id: 'maputo', name: '马普托', nameEn: 'Maputo', country: '莫桑比克', timezone: 'Africa/Maputo' },
  { id: 'antananarivo', name: '塔那那利佛', nameEn: 'Antananarivo', country: '马达加斯加', timezone: 'Indian/Antananarivo' },
  { id: 'portlouis', name: '路易港', nameEn: 'Port Louis', country: '毛里求斯', timezone: 'Indian/Mauritius' },
  { id: 'victoria', name: '维多利亚', nameEn: 'Victoria', country: '塞舌尔', timezone: 'Indian/Mahe' },
  { id: 'nouakchott', name: '努瓦克肖特', nameEn: 'Nouakchott', country: '毛里塔尼亚', timezone: 'Africa/Nouakchott' },
  { id: 'dakar', name: '达喀尔', nameEn: 'Dakar', country: '塞内加尔', timezone: 'Africa/Dakar' },
  { id: 'conakry', name: '科纳克里', nameEn: 'Conakry', country: '几内亚', timezone: 'Africa/Conakry' },
  { id: 'freetown', name: '弗里敦', nameEn: 'Freetown', country: '塞拉利昂', timezone: 'Africa/Freetown' },
  { id: 'monrovia', name: '蒙罗维亚', nameEn: 'Monrovia', country: '利比里亚', timezone: 'Africa/Monrovia' },
  { id: 'abidjan', name: '阿比让', nameEn: 'Abidjan', country: '科特迪瓦', timezone: 'Africa/Abidjan' },
  { id: 'yamoussoukro', name: '亚穆苏克罗', nameEn: 'Yamoussoukro', country: '科特迪瓦', timezone: 'Africa/Abidjan' },
  { id: 'douala', name: '杜阿拉', nameEn: 'Douala', country: '喀麦隆', timezone: 'Africa/Douala' },
  { id: 'yaounde', name: '雅温得', nameEn: 'Yaoundé', country: '喀麦隆', timezone: 'Africa/Douala' },
  { id: 'libreville', name: '利伯维尔', nameEn: 'Libreville', country: '加蓬', timezone: 'Africa/Libreville' },
  { id: 'brazzaville', name: '布拉柴维尔', nameEn: 'Brazzaville', country: '刚果共和国', timezone: 'Africa/Brazzaville' },
  { id: 'kinshasa', name: '金沙萨', nameEn: 'Kinshasa', country: '刚果民主共和国', timezone: 'Africa/Kinshasa' },
  { id: 'luanda', name: '罗安达', nameEn: 'Luanda', country: '安哥拉', timezone: 'Africa/Luanda' },
  { id: 'windhoek', name: '温得和克', nameEn: 'Windhoek', country: '纳米比亚', timezone: 'Africa/Windhoek' },
  { id: 'gaborone', name: '哈博罗内', nameEn: 'Gaborone', country: '博茨瓦纳', timezone: 'Africa/Gaborone' },
  { id: 'maseru', name: '马塞卢', nameEn: 'Maseru', country: '莱索托', timezone: 'Africa/Maseru' },
  { id: 'mbabane', name: '姆巴巴纳', nameEn: 'Mbabane', country: '斯威士兰', timezone: 'Africa/Mbabane' },

  // 大洋洲
  { id: 'sydney', name: '悉尼', nameEn: 'Sydney', country: '澳大利亚', timezone: 'Australia/Sydney' },
  { id: 'melbourne', name: '墨尔本', nameEn: 'Melbourne', country: '澳大利亚', timezone: 'Australia/Melbourne' },
  { id: 'brisbane', name: '布里斯班', nameEn: 'Brisbane', country: '澳大利亚', timezone: 'Australia/Brisbane' },
  { id: 'perth', name: '珀斯', nameEn: 'Perth', country: '澳大利亚', timezone: 'Australia/Perth' },
  { id: 'adelaide', name: '阿德莱德', nameEn: 'Adelaide', country: '澳大利亚', timezone: 'Australia/Adelaide' },
  { id: 'canberra', name: '堪培拉', nameEn: 'Canberra', country: '澳大利亚', timezone: 'Australia/Sydney' },
  { id: 'goldcoast', name: '黄金海岸', nameEn: 'Gold Coast', country: '澳大利亚', timezone: 'Australia/Brisbane' },
  { id: 'newcastle', name: '纽卡斯尔', nameEn: 'Newcastle', country: '澳大利亚', timezone: 'Australia/Sydney' },
  { id: 'wollongong', name: '卧龙岗', nameEn: 'Wollongong', country: '澳大利亚', timezone: 'Australia/Sydney' },
  { id: 'auckland', name: '奥克兰', nameEn: 'Auckland', country: '新西兰', timezone: 'Pacific/Auckland' },
  { id: 'wellington', name: '惠灵顿', nameEn: 'Wellington', country: '新西兰', timezone: 'Pacific/Auckland' },
  { id: 'christchurch', name: '克赖斯特彻奇', nameEn: 'Christchurch', country: '新西兰', timezone: 'Pacific/Auckland' },
  { id: 'suva', name: '苏瓦', nameEn: 'Suva', country: '斐济', timezone: 'Pacific/Fiji' },
  { id: 'nadi', name: '南迪', nameEn: 'Nadi', country: '斐济', timezone: 'Pacific/Fiji' },
  { id: 'apia', name: '阿皮亚', nameEn: 'Apia', country: '萨摩亚', timezone: 'Pacific/Apia' },
  { id: 'nukualofa', name: '努库阿洛法', nameEn: 'Nuku\'alofa', country: '汤加', timezone: 'Pacific/Tongatapu' },
  { id: 'honolulu', name: '火奴鲁鲁', nameEn: 'Honolulu', country: '美国', timezone: 'Pacific/Honolulu' },
  { id: 'papeete', name: '帕皮提', nameEn: 'Papeete', country: '法属波利尼西亚', timezone: 'Pacific/Tahiti' },
  { id: 'noumea', name: '努美阿', nameEn: 'Nouméa', country: '新喀里多尼亚', timezone: 'Pacific/Noumea' },
  { id: 'portvila', name: '维拉港', nameEn: 'Port Vila', country: '瓦努阿图', timezone: 'Pacific/Efate' },
  { id: 'portmoresby', name: '莫尔兹比港', nameEn: 'Port Moresby', country: '巴布亚新几内亚', timezone: 'Pacific/Port_Moresby' },
  { id: 'majuro', name: '马朱罗', nameEn: 'Majuro', country: '马绍尔群岛', timezone: 'Pacific/Majuro' },
  { id: 'tarawa', name: '塔拉瓦', nameEn: 'Tarawa', country: '基里巴斯', timezone: 'Pacific/Tarawa' },
  { id: 'funafuti', name: '富纳富提', nameEn: 'Funafuti', country: '图瓦卢', timezone: 'Pacific/Funafuti' },
  { id: 'palikir', name: '帕利基尔', nameEn: 'Palikir', country: '密克罗尼西亚', timezone: 'Pacific/Pohnpei' },

  // 其他重要岛屿和地区
  { id: 'reykjavik', name: '雷克雅未克', nameEn: 'Reykjavik', country: '冰岛', timezone: 'Atlantic/Reykjavik' },
  { id: 'stanley', name: '斯坦利', nameEn: 'Stanley', country: '福克兰群岛', timezone: 'Atlantic/Stanley' },
  { id: 'jamestown', name: '詹姆斯敦', nameEn: 'Jamestown', country: '圣赫勒拿', timezone: 'Atlantic/St_Helena' },
  { id: 'grytviken', name: '格里特维肯', nameEn: 'Grytviken', country: '南乔治亚和南桑威奇群岛', timezone: 'Atlantic/South_Georgia' },
];

// 获取本地时区
const getLocalTimezone = () => {
  return DateTime.local().zoneName;
};

// 计算时差（小时）
export const calculateTimeDifference = (targetTimezone, localTimezone) => {
  const now = DateTime.local();
  const targetOffset = DateTime.local().setZone(targetTimezone).offset;
  const localOffset = DateTime.local().setZone(localTimezone).offset;
  return (targetOffset - localOffset) / 60;
};

// 判断是否工作时间
export const isWorkingHours = (dateTime) => {
  const hour = dateTime.hour;
  return hour >= 9 && hour < 18;
};

// 获取时段
export const getTimeOfDay = (dateTime) => {
  const hour = dateTime.hour;
  if (hour >= 6 && hour < 12) return 'Morning';
  if (hour >= 12 && hour < 18) return 'Afternoon';
  return 'Night';
};

// 格式化UTC偏移
export const formatUTCOffset = (timezone) => {
  const offset = DateTime.local().setZone(timezone).toFormat('ZZ');
  return `UTC${offset}`;
};

// 查找最佳会议时间
export const findBestMeetingSlots = (cities, date) => {
  if (cities.length < 2) return [];

  const slots = [];

  // 遍历每个小时（以本地时区为基准）
  for (let hour = 0; hour < 24; hour++) {
    const workingCities = [];

    // 创建本地时区在该小时的时间点
    const localTimeAtHour = date.set({ hour });

    // 检查每个城市在该时刻是否是工作时间
    cities.forEach(city => {
      // 将本地时间转换为该城市时区的时间
      const cityTime = localTimeAtHour.setZone(city.timezone);
      if (isWorkingHours(cityTime)) {
        workingCities.push(city.id);
      }
    });

    // 如果所有城市都在工作，标记为最佳时间
    if (workingCities.length === cities.length) {
      slots.push({
        startHour: hour,
        endHour: hour + 1,
        overlapCount: cities.length,
        cities: workingCities
      });
    }
  }

  // 合并连续的时间段
  return mergeConsecutiveSlots(slots);
};

// 合并连续时间段
const mergeConsecutiveSlots = (slots) => {
  if (slots.length === 0) return [];

  const merged = [slots[0]];

  for (let i = 1; i < slots.length; i++) {
    const last = merged[merged.length - 1];
    const current = slots[i];

    if (last.endHour === current.startHour) {
      last.endHour = current.endHour;
    } else {
      merged.push(current);
    }
  }

  return merged;
};

// 生成时间轴段
export const generateTimelineSegments = (city, date, bestSlots) => {
  const segments = [];

  for (let hour = 0; hour < 24; hour++) {
    // 创建本地时区在该小时的时间点
    const localTimeAtHour = date.set({ hour });

    // 将本地时间转换为该城市时区的时间
    const cityTime = localTimeAtHour.setZone(city.timezone);

    // 检查这个本地小时是否在最佳会议时间段内
    const isOverlap = bestSlots.some(slot =>
      hour >= slot.startHour && hour < slot.endHour
    );

    segments.push({
      hour,
      isWorkingHours: isWorkingHours(cityTime),
      timeOfDay: getTimeOfDay(cityTime),
      isOverlap
    });
  }

  return segments;
};

// 将城市列表编码为 URL 参数
export const encodeCitiesToUrl = (cities) => {
  const cityIds = cities.map(c => c.id).join(',');
  return btoa(cityIds); // Base64 编码
};

// 从 URL 参数解码城市列表
export const decodeCitiesFromUrl = (encoded) => {
  try {
    const cityIds = atob(encoded).split(',');
    return cityIds.map(id => cityData.find(c => c.id === id)).filter(Boolean);
  } catch (e) {
    console.error('Failed to decode cities from URL:', e);
    return [];
  }
};

// 创建 Zustand store
export const useTimeStore = create((set, get) => ({
  // 状态
  cities: [],
  currentTime: DateTime.local(),
  localTimezone: getLocalTimezone(),

  // 操作
  setCurrentTime: (time) => set({ currentTime: time }),

  addCity: (city) => set((state) => {
    // 检查是否已存在
    if (state.cities.some(c => c.id === city.id)) {
      return state;
    }
    return { cities: [...state.cities, city] };
  }),

  removeCity: (id) => set((state) => ({
    cities: state.cities.filter(c => c.id !== id)
  })),

  reorderCities: (fromIndex, toIndex) => set((state) => {
    const newCities = [...state.cities];
    const [removed] = newCities.splice(fromIndex, 1);
    newCities.splice(toIndex, 0, removed);
    return { cities: newCities };
  }),

  setCities: (cities) => set({ cities }),

  // 获取器
  getBestMeetingSlots: () => {
    const { cities, currentTime } = get();
    return findBestMeetingSlots(cities, currentTime);
  },

  getTimeDifference: (targetTimezone) => {
    const { localTimezone } = get();
    return calculateTimeDifference(targetTimezone, localTimezone);
  }
}));
