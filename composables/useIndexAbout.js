import { ref, computed } from "vue";

export function useIndexAbout() {
	const aboutData = ref([
		{
			id: "about1",
			title: "湧業能源雲林光電維運案",
			description:
				"湧業能源於2023年7月承攬雲林地區著名製造業工廠13MＷ光電維運案",
			link: "/about",
			path: "index_news_pic1.jpg",
		},
		{
		 	id: "about2",
			title: "高雄特登工廠244.08KW竣工",
		 	description:
		 		"2024年1月23日掛錶",
		 	link: "/about",
		 	path: "LINE_ALBUM_申騰空拍_231229_16.jpg",
		 },
		 {
			id: "about3",
		   title: "台南廠房487.92KW竣工",
			description:
				"2024年3月22日掛錶",
			link: "/about",
			path: "DJI_0508.jpg",
		},
		{
			id: "about4",
		   title: "高雄廠房393.12KW竣工",
			description:
				"2024年4月17日掛錶",
			link: "/about",
			path: "DJI_0628.jpg",
		},
		{
			id: "about5",
		   title: "屏東崁頂98.4KW竣工",
			description:
				"2025年5月19日掛錶",
			link: "/about",
			path: "jpg0519.jpg",
		},
		{
			id: "about6",
		   title: "高雄廠房178.06KW竣工",
			description:
				"2025年6月25日掛錶",
			link: "/about",
			path: "jpg0522.jpg",
		},
		{
			id: "about7",
		   title: "斗六廠房750.6KW竣工",
			description:
				"2025年6月26日掛錶",
			link: "/about",
			path: "jpg0514.jpg",
		},
		{
			id: "about8",
		   title: "義竹魚電344.44KW竣工",
			description:
				"2025年6月30日掛錶",
			link: "/about",
			path: "jpg0520.jpg",
		},
		{
			id: "about9",
		   title: "義竹魚電496.495KW竣工",
			description:
				"2025年10月31日掛錶",
			link: "/about",
			path: "jpg0521.jpg",
		},
		{
			id: "about10",
		   title: "台中菇舍1329.36KW竣工",
			description:
				"預計2025年10月31日掛錶",
			link: "/about",
			path: "jpg0518.jpg",
		},
		{
			id: "about11",
		   title: "屏東廠房418.2KW竣工",
			description:
				"預計2025年10月31日掛錶",
			link: "/about",
			path: "jpg0521.jpg",
		},		
	]);
	const aboutDataActive = ref(0);
	const nowAboutData = computed(() => aboutData.value[aboutDataActive.value]);
	const nowAboutTitle = computed(() => nowAboutData.value.title);
	const nowAboutDescription = computed(() => nowAboutData.value.description);
	const nowAboutLink = computed(() => nowAboutData.value.link);
	const nowAboutPath = computed(() => nowAboutData.value.path);
	let aboutTimer = null;
	const changeAboutDataActive = (index) => {
		aboutDataActive.value =
			(index + aboutData.value.length) % aboutData.value.length;
		startAboutTimer();
	};
	const aboutTimerHandler = () => {
		changeAboutDataActive(aboutDataActive.value + 1);
	};
	const startAboutTimer = () => {
		clearTimeout(aboutTimer);
		if (aboutData.value.length > 1) {
			aboutTimer = setTimeout(aboutTimerHandler, 5000);
		}
	};
	const stopAboutTimer = () => {
		clearTimeout(aboutTimer);
	};

	return {
		aboutData,
		aboutDataActive,
		nowAboutData,
		nowAboutTitle,
		nowAboutDescription,
		nowAboutLink,
		nowAboutPath,
		aboutTimer,
		changeAboutDataActive,
		aboutTimerHandler,
		startAboutTimer,
		stopAboutTimer,
	};
}
