<template>
    <div class="footer">
        <div class="pages-wrapper footer-wrapper">
            <div class="left">
                <div class="logon-wrapper">
                    <img src="@/assets/images/safu_logo-modified.png" width="40" alt="">
                    <span>CaptainSafu</span>
                </div>
            </div>
            <div class="right footer-right">
                <div class="footer-right-item">
                    <div class="footer-title">SOCIAL</div>
                    <div class="underline"></div>
                    <ul class="footer-right-item-list">
                        <li>
                            <img src="../assets/images/twiiter@2x.png" width="16" alt="">
                            <a href="https://twitter.com/captainsafu" target="_blank" rel="">Twitter</a>
                        </li>

                      <li>
                        <img src="../assets/images/github.png" width="16" alt="">
                        <a href="https://github.com/captainsafu" target="_blank" rel="">GitHub</a>
                      </li>
                    </ul>
                </div>
                <div class="footer-right-item">
                    <div class="footer-title">CONTACT</div>
                    <div class="underline"></div>
                    <ul class="footer-right-item-list">
                        <li>
                            contact@captainsafu.io
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style  lang="less" scoped>
    .footer {
        color: #fff;
        background-color: #1B2532;
        .footer-wrapper {
            display: flex;
            justify-content: space-between;
            padding: 80px 0 100px;

            .logon-wrapper {
                display: flex;
                align-items: center;
                cursor: pointer;

                img {
                    margin-right: 20px;
                }
            }

            .footer-right {
                display: flex;
                .underline {
                    border-bottom: 2px solid white;
                    width: 45px;
                    margin-top: 5px;
                    margin-bottom: 15px;                    
                }

                &-item {
                    margin-left: 40px;

                    .footer-title {
                        font-size: 14px;
                        font-weight: bold;
                    }

                    &-list {
                        font-size: 14px;
                    li {
                        margin-bottom: 15px;

                    img {
                        float: left;
                        margin: 2px 10px 0 0;
                    }

                    a {
                        color: #fff;
                    }
                }
                }
                }
            }
        }   
    }
</style>
