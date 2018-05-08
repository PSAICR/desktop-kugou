<template>
	<div class="files">
		<p>文件名字是:{{filename}}</p>
		<p>文件大小是:{{filesize}}</p>
		<form action="/api/files.php" method="post" enctype="multipart/form-data" >
			<input type="file" name="file" ref="files" multiple="multiple"/>
			<input type="submit" value="提交" @click.prevent="files"/>
		</form>
		<!--33516976 83888608-->
	</div>
</template>

<script>
export default({
	props:[],
	data(){
		return{
			filename:'',
			filesize:'',
		}
	},
	methods:{
		files(){
			console.log(this.$refs.files.files)
			this.filename = this.$refs.files.files[0].name;
			this.filesize = this.$refs.files.files[0].size + 'MB';
			console.log(this.$refs.files.files[0].size)
			
			let mb = Math.round(this.$refs.files.files[0].size/1024/1024);
			console.log(mb)
		}
	},
	computed:{
		
	}
})
</script>

<style>
	.files{
		padding:50px;
	}
</style>