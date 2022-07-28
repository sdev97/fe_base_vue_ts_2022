<template>
    <div>
        <div class="project-wrapper">
        <div class="header">
            <div class="header-left">
                <img src="@/assets/images/project-logo.png" alt="">
                <span>Aibril</span>
            </div>
            <div class="header-right">
                <!-- <img src="@/assets/images/change-language.png" /> -->
                <el-dropdown
                        trigger="click"
                    >
                        <span class="el-dropdown-link">
                             <img src="@/assets/images/change-language.png" />
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>English</el-dropdown-item>
                            <el-dropdown-item>한국어</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                <div class="user-info">
                    <div>nhatkytrongtu@gmail.com</div>
                    <div>Kha Banh</div>
                </div>
                <div class="action">
                    <img src="@/assets/images/user-avatar.jpg" alt="">
                    <!-- <i class="fa fa-chevron-down" aria-hidden="true"></i> -->
                    <el-dropdown
                        trigger="click"
                    >
                        <span class="el-dropdown-link">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Edit Profile</el-dropdown-item>
                            <el-dropdown-item>Change Password</el-dropdown-item>
                            <el-dropdown-item>Log out</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="main hide">
            <div class="side-bar">
                <div class="icon-container">
                    <div>
                        <el-tooltip class="item" effect="dark" content="Dashboard" placement="right">
                            <i class="fa fa-ravelry" aria-hidden="true"></i>
                        </el-tooltip>
                        <div>Dashboard</div>
                    </div>
                    <div> 
                        <el-tooltip class="item" effect="dark" content="Project" placement="right">
                            <i class="fa fa-grav" aria-hidden="true"></i>
                        </el-tooltip>
                        <div>Project</div>
                    </div>
                    <div>
                        <el-tooltip class="item" effect="dark" content="About us" placement="right">
                            <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                        </el-tooltip>
                        <div>About us</div>
                    </div>
                    <div>
                        <el-tooltip class="item" effect="dark" content="Contact us" placement="right">
                            <i class="fa fa-bullseye" aria-hidden="true"></i>
                        </el-tooltip>
                        <div>Contact us</div>
                    </div>
                    <div>
                        <el-tooltip class="item" effect="dark" content="Zoom in" placement="right">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </el-tooltip>     
                        <div>Zoom out</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'Project'
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>

</style>