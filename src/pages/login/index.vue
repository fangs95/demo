<template>
    <div class="login-container">
        <div class="login-card">
            <h2>登录</h2>
            <form>
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <input type="text" id="username" name="username" v-model="username" required>
                </div>
                <div class="form-group">
                    <label for="password">密码:</label>
                    <input type="password" id="password" name="password" v-model="password" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-login">登录</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: ''
        }
    }
}
</script>

<style>
.login-container {
    background-color: #4285F4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.login-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 350px;
}
.login-card h2 {
    color: #4285F4;
    text-align: center;
}
.form-group {
    margin-bottom: 10px;
}
label {
    font-size: 16px;
    font-weight: bold;
}
input[type=text],
input[type=password] {
    border-radius: 4px;
    border: none;
    padding: 10px;
    width: 100%;
}
.btn-login {
    background-color: #4285F4;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}
.btn-login:hover {
    background-color: #3367D6;
}
</style>
