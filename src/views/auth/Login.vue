<template>
    <div class="wrapper">
        <div class="login-wrapper auto-layout">
            <div class="login-logo">
                <img src="@/assets/images/login-logo.png" alt="logo">
            </div>
            <div class="login-content">
                <div class="login-box" 
                    v-loading="isLoading"
                    element-loading-background="transparent"
                >
                    <h1>Login</h1>
                    <div class="label">Sign in to your account using email and password provided during registration.</div>
                    <input type="text" value="anhlh@dasvision.vn" />
                    <input type="password" value="anhlh@dasvision.vn" />
                    <button class="button login-btn" @click="handleLogin">Login</button>
                    <div class="label">Or sign in with</div>
                    <button class="button okta-login-btn">OKTA Login</button>
                </div>
            </div>
        <div class="copy-right">Copyright © <b>SK C&C CO.</b> , LTD. All Rights Reserved.</div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'Login'
})
export default class extends Vue {
    public isLoading = false
    handleLogin() {
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
            this.$notify({
                title: 'OOPS! Some thing wrong',
                message: 'Check intenet connection',
                type: 'error',
                duration: 3000
            });
        }, 2000)
    }
}
</script>

<style lang="scss" scoped>

</style>