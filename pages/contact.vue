<script setup>
import { ref, computed, onMounted } from "vue";

const form = ref({
	contactName: "",
	contactMobile: "",
	contactEmail: "",
	contactContent: "",
});
const handleSubmit = () => {
	const sortName = "姓名: " + encodeURIComponent(form.value.contactName),
		sortMobile = "聯繫電話: " + encodeURIComponent(form.value.contactMobile),
		sortEmail = "電子信箱: " + encodeURIComponent(form.value.contactEmail),
		sortContent = encodeURIComponent(form.value.contactContent),
		letterMain = `您好：%0D%0A${sortContent}%0D%0A%0D%0A`,
		senderInfo = `以下是我的聯繫資訊：%0D%0A${sortName}%0D%0A${sortMobile}%0D%0A${sortEmail}`,
		recipient = "maggie.liu@gush-energy.com",
		mailtoLink = `mailto:${recipient}?subject=聯繫表單提交&body=${letterMain}%0D%0A${senderInfo}`;

	window.location.href = mailtoLink;
};
</script>

<template>
	<div class="page contact">
		<PageKv
			title="聯絡我們"
			text="若您有進一步想了解的事項，歡迎填寫下方資訊供我們聯繫您"
			picPath="contact_kv.jpg"
		/>
		<div class="contact__container">
			<form @submit.prevent="handleSubmit" class="contact__form">
				<div class="contact__form__content">
					<div class="contact__form__col">
						<div class="form__item">
							<label for="contactName" class="form__label">姓名</label>
							<input
								type="text"
								id="contactName"
								name="contactName"
								class="form__control"
								placeholder="請輸入姓名"
								v-model="form.contactName"
								required
							/>
						</div>
						<div class="form__item">
							<label for="contactMobile" class="form__label">聯繫電話</label>
							<input
								type="tel"
								id="contactMobile"
								name="contactMobile"
								class="form__control"
								placeholder="請輸入聯繫電話"
								v-model="form.contactMobile"
							/>
						</div>
						<div class="form__item">
							<label for="contactEmail" class="form__label">電子信箱</label>
							<input
								type="email"
								id="contactEmail"
								name="contactEmail"
								class="form__control"
								placeholder="請輸入電子信箱"
								v-model="form.contactEmail"
								required
							/>
						</div>
					</div>
					<div class="contact__form__col">
						<div class="form__item">
							<label for="contactContent" class="form__label">內容</label>
							<textarea
								cols="30"
								rows="12"
								name="contactContent"
								id="contactContent"
								class="form__control"
								placeholder="請在此輸入內容"
								v-model="form.contactContent"
							></textarea>
						</div>
					</div>
				</div>
				<div class="form__btn">
					<button type="submit" class="btn formbtn">送出</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style></style>
