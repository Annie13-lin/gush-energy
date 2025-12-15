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
		   title: "台中菇舍1329.36KW竣工",
			description:
				"2025年11月17日掛錶",
			link: "/about",
			path: "jpg0523.jpg",
		},
		{
			id: "about3",
		   title: "屏東廠房418.2KW竣工",
			description:
				"預計2025年12月31日前掛錶",
			link: "/about",
			path: "jpg0524.jpg",
		},
		{
			id: "about4",
		   title: "三芝廠房1544.99KW竣工",
			description:
				"預計2026年3月30日前掛錶",
			link: "/about",
			path: "jpg0525.jpg",
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
