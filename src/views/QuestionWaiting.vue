<template>
    <div id="question">
        <div class="container">
            <div class="left">
                <div class="content">
                    <div class="content-header">
                        <div class="header-info">
                            <a href="" class="header-a">
                               <button class="header-btn first-btn" exact><svg class="Zi Zi--Fire QuestionType-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z" fill-rule="evenodd"></path></svg>人气问题</button>
                            </a><a href="" class="header-a">
                            <button class="header-btn" exact><svg class="Zi Zi--Seed QuestionType-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M10.558 9.842c.745 1.423 1.148 2.996 1.283 4.574a14.663 14.663 0 0 1 .052 1.125 16.067 16.067 0 0 1-.491 4.078l-.028.104a.232.232 0 0 1-.295.155l-.94-.302a.221.221 0 0 1-.148-.277l.018-.055a13.683 13.683 0 0 0 .234-.852 14.827 14.827 0 0 0 .4-2.89.225.225 0 0 0-.176-.223 11.89 11.89 0 0 1-1.383-.42 11.508 11.508 0 0 1-1.806-.86 10.681 10.681 0 0 1-2.98-2.581A10.213 10.213 0 0 1 3.23 9.784 10.388 10.388 0 0 1 2.49 8a10.772 10.772 0 0 1-.406-1.87 9.95 9.95 0 0 1-.062-1.922.229.229 0 0 1 .29-.2c1.707.321 3.366.97 4.806 1.964a10.75 10.75 0 0 1 3.44 3.87zm12.04-2.252l.01.002c.117.03.19.147.165.266a8.966 8.966 0 0 1-1.274 3.592 8.552 8.552 0 0 1-1.204 1.521 8.724 8.724 0 0 1-1.53 1.212 8.872 8.872 0 0 1-3.674 1.233c-.235.027-.47.045-.705.056a.225.225 0 0 0-.207.256c.034.262.084.522.148.778a.223.223 0 0 1-.162.269l-.859.218a.223.223 0 0 1-.273-.177 8.418 8.418 0 0 1-.102-2.458c.05-.469.14-.932.27-1.384a7.868 7.868 0 0 1 2.234-3.63c.062-.057.123-.114.189-.167l.193-.161c.065-.053.133-.103.2-.153.13-.104.273-.194.41-.289.144-.086.284-.178.432-.255.144-.084.296-.155.445-.229.152-.067.303-.136.46-.194.309-.118.625-.22.946-.296a8.357 8.357 0 0 1 1.947-.23 8.143 8.143 0 0 1 1.941.22z"></path></svg>潜力好问</button>
                        </a><a href="" class="header-a">
                            <button class="header-btn"><svg class="Zi Zi--New QuestionType-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M3.111 2.667H20.89c.614 0 1.111.497 1.111 1.11v14.091c0 .45-.272.857-.689 1.028l-8.73 3.585c-.462.19-.98.187-1.441-.007L2.679 18.9A1.111 1.111 0 0 1 2 17.876V3.778c0-.614.497-1.111 1.111-1.111zm2.503 10.75v-2.753h.064l2.024 2.753h.977V8.573H7.51v2.725h-.064L5.429 8.573h-.983v4.844h1.168zm7.526-.99h-2.088v-.99h1.964v-.907h-1.964v-.967h2.088v-.99H9.82v4.844h3.32v-.99zm3.992-1.978h.06l.809 2.968h1.155l1.265-4.844h-1.269l-.634 3.212h-.06l-.803-3.212h-.987l-.775 3.212h-.06l-.645-3.212h-1.28l1.266 4.844h1.162l.796-2.968z" fill-rule="evenodd"></path></svg>新问题</button>
                        </a><a href="" class="header-a">
                            <button class="header-btn"><svg class="Zi Zi--Creator QuestionType-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z" fill-rule="evenodd"></path></svg>人人答</button>
                        </a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="content-div1">
                            <a href="#" class="content-title">为什么会有人考不上一本</a>
                            <p>如题，为什么会有人考不上一本</p>
                            <div class="content-bottom">
                                <a href="" type="button"><svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写回答</a>
                                <button class="bottom-btn"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
                                <button class="bottom-btn"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>稍后答</button>
                                <div class="last">
                                  <div class=" bottom-info">85个回答 56856个浏览</div>
                                </div>
                            </div>

                        </div>
                        <div class="content-div1">
                            <a href="#" class="content-title">为什么会有人考不上一本</a>
                            <div class="content-bottom">
                                <a href="" type="button"><svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写回答</a>
                                <button class="bottom-btn"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
                                <button class="bottom-btn"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>稍后答</button>
                                <div class="last">
                                    <div class=" bottom-info">85个回答 56856个浏览</div>
                                </div>
                            </div>

                        </div>
                        <div class="content-div1">
                            <a href="#" class="content-title">为什么会有人考不上一本</a>
                            <div class="content-bottom">
                                <a href="" type="button"><svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写回答</a>
                                <button class="bottom-btn"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
                                <button class="bottom-btn"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>稍后答</button>
                                <div class="last">
                                    <div class=" bottom-info">85个回答 56856个浏览</div>
                                </div>
                            </div>
                        </div>
                        <div class="content-div1">
                            <a href="#" class="content-title">为什么会有人考不上一本</a>
                            <div class="content-bottom">
                                <a href="" type="button"><svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写回答</a>
                                <button class="bottom-btn"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
                                <button class="bottom-btn"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>稍后答</button>
                                <div class="last">
                                    <div class=" bottom-info">85个回答 56856个浏览</div>
                                </div>
                            </div>
                        </div>
                        <div class="content-div1">
                            <a href="#" class="content-title">为什么会有人考不上一本</a>
                            <div class="content-bottom">
                                <a href="" type="button"><svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写回答</a>
                                <button class="bottom-btn"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
                                <button class="bottom-btn"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>稍后答</button>
                                <div class="last">
                                    <div class=" bottom-info">85个回答 56856个浏览</div>
                                </div>
                            </div>
                        </div>
                        <div class="content-div1">
                            <a href="#" class="content-title">为什么会有人考不上一本</a>
                            <div class="content-bottom">
                                <a href="" type="button"><svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写回答</a>
                                <button class="bottom-btn"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
                                <button class="bottom-btn"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>稍后答</button>
                                <div class="last">
                                    <div class=" bottom-info">85个回答 56856个浏览</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <HomeRight></HomeRight>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入右边组件
    import HomeRight from '../components/HomeRight.vue'

    export default {
        name: "QuestionWaiting",
        components:{
            HomeRight
        }
    }
</script>

<style lang="scss" scoped>
#question{
    margin: 0 ;
    padding: 0;
    background:#eee;
    height: 1200px;
    .container{
        margin: 60px auto;
        min-width: 1100px;
        padding-left: 30px;
        min-height: 700px;
        display: flex;
        .left{
            min-width: 700px;
            background:#fff;
            min-height: 200px;
            margin-top:15px;
            .content{
                margin: 0 auto;
                width: 90%;
                min-height: 300px;
                .content-header{
                    width: 100%;
                    height: 68px;
                    background: #fff;
                    .header-info {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        background:#fff;
                        border-bottom: 1px solid #eee;

                        .header-btn{
                            background:#eee;
                            box-shadow: 0 6px 10px 0 rgba(0,132,255,.06);
                            font-weight: 500;
                            font-size: 14px;
                            padding: 5px 12px;
                            height:32px;
                            width:100px;
                            border-radius: 16px;
                            border: none;
                            margin:20px 10px;
                            svg{
                                color: #8590a6;
                            }
                        }
                        .header-btn:active{
                            color:#0084ff;
                        }
                        .first-btn {
                            color: #0084ff;
                            background-color: rgba(0,132,255,.08);
                            svg{
                                color: #0084ff;
                            }
                        }


                    }
                }
                .content-div1{
                    border-bottom: 1px solid #f6f6f6;
                    padding: 17px 0 22px;
                    position: relative;

                }
                .content-title{
                    color: #1a1a1a;
                    font-size: 18px;
                    line-height: 27px;
                    margin-bottom: 8px;
                    font-weight: 600;
                    text-decoration: none;
                }
                .content-bottom{
                    display: flex;
                    margin-top: 17px;
                    a{
                        line-height: 28px;
                        padding: 0;
                        width: 94px;
                        color: #0084ff;
                        border: 1px solid;border-radius: 3px;
                        svg{
                            margin-left: 10px;
                        }
                    }
                    .bottom-btn{
                        margin-left: 20px;
                        display: flex;
                        line-height: 28px;
                        width: 96px;
                        border: none;
                        border-radius: 0;
                        color: #8590a6;
                        font-size: 14px;
                        background: none;
                        svg{
                            margin-right: 2px;
                            line-height: 28px;
                            color: #8590a6;
                            font-size: 14px;
                            margin-top: 5px;

                        }
                        .Zi--Later{
                            margin-top: 2px;
                        }

                    }
                    .last{
                        display: flex;
                        margin-left: auto;
                        margin-left: 30px;
                        color: #8590a6;
                        font-size: 14px;
                    }
                    .bottom-info{
                        margin-left: 60px;
                        margin-top: 5px;

                    }
                }
            }
        }
        .right{
            width: 30%;
            margin-left:10px;
            float: left;
            margin-top:-10px;
        }
    }
}
</style>
