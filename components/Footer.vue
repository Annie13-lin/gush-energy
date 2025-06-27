<script setup></script>

<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__main">
				<nav class="footer__menu">
					<NuxtLink to="/" class="footer__menu__link">首頁</NuxtLink>
					<NuxtLink to="/about" class="footer__menu__link">關於湧業</NuxtLink>
					<NuxtLink to="/service" class="footer__menu__link">服務項目</NuxtLink>
					<NuxtLink to="/case" class="footer__menu__link">實績案例</NuxtLink>
					<NuxtLink to="/qa" class="footer__menu__link">常見問題</NuxtLink>
					<NuxtLink to="/contact" class="footer__menu__link">聯絡我們</NuxtLink>
				</nav>
				<ul class="footer__contact">
					<li class="footer__contact__item">
						<div class="footer__contact__icon">
							<img src="~/assets/img/icon_phone.png" />
						</div>
						<p class="footer__contact__text">05-5350198</p>
					</li>
					<li class="footer__contact__item">
						<div class="footer__contact__icon">
							<img src="~/assets/img/icon_mail.png" />
						</div>
						<p class="footer__contact__text">maggie.liu@gush-energy.com</p>
					</li>
					<li class="footer__contact__item">
						<div class="footer__contact__icon">
							<img src="~/assets/img/icon_location.png" />
						</div>
						<p class="footer__contact__text">雲林縣斗六市文華街1-1號</p>
					</li>
				</ul>
			</div>
			<p class="footer__copyright">
				Copyright © Gush Energy Co. , Ltd. All Rights Reserved.
			</p>
		</div>
	</footer>
</template>

<style></style>
