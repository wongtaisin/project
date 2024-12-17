<template>
	<div class="common-footer">
		<div class="footer-top">
			<div class="content">
				<div class="about">
					<div>关于遗嘱库</div>
					<ul>
						<li>机构设置</li>
						<li>新闻资讯</li>
						<li>法规案例</li>
						<li>公益团队</li>
						<li>合作机构</li>
						<li>在线预约</li>
					</ul>
				</div>
				<div class="relation">
					<div>联系我们</div>
					<ul>
						<li>地址：{{homeData.address}}</li>
						<li>电话：{{homeData.tel}}</li>
					</ul>
				</div>
				<div class="img">
					<img alt src="../../../assets/images/common/wechat.jpg" />
					<p>微信公众号</p>
				</div>
				<div class="img">
					<img alt src="../../../assets/images/common/001.jpg" />
					<p>抖音号</p>
				</div>
				<div class="img">
					<img alt src="../../../assets/images/common/002.jpg" />
					<p>牛犇请你演电影</p>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="copy">
				{{data}}
				<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备16024136号-1</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: String,
			default() {
				return ''
			}
		}
	},
	computed: {
		homeData() {
			return this.$store.getters['home/homeData'].data
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.common-footer {
	overflow: hidden;
	.footer-top {
		padding: 24px 0;
		background: #292929;
		height: 131px;
		.content {
			width: 1080px;
			margin: 0 auto;
			color: #c0c0c0e5;
			display: flex;
			justify-content: space-between;
			overflow: hidden;
		}
		.about {
			width: 340px;

			ul {
				width: 340px;
				margin-top: 30px;
				li {
					width: 113px;
					float: left;
					line-height: 2;
				}
			}
		}
		.relation {
			width: 420px;
			ul {
				margin-top: 30px;
				li {
					line-height: 2;
				}
			}
		}
		.img {
			width: 110px;
			height: 110px;
			text-align: center;
			margin-left: 20px;
			img {
				width: 110px;
				height: 110px;
			}
		}
	}
	.footer-bottom {
		height: 32px;
		line-height: 32px;
		background: black;
		.copy {
			text-align: center;
			color: white;
		}
	}
	a {
		color: white;
	}
}
</style>
