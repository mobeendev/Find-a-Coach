<template>
    <h2>{{ title }}</h2>
    <router-link to="/">Go to Home</router-link> 
    <router-link to="/about">Go to About</router-link>
<br>
 <router-view></router-view>


</template>


<script>
export default {
    data() {
        return {
                title: "Find a coach App"      
        }
    },
}
</script>