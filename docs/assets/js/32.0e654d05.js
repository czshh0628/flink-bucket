(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{439:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"yarn模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn模式"}},[a._v("#")]),a._v(" yarn模式")]),a._v(" "),s("p",[a._v("yarn上部署的过程是：")]),a._v(" "),s("ol",[s("li",[a._v("客户端把Flink应用提交给Yarn的ResourceManager，Yarn的ResourceManager会向Yarn的NodeManager申请容器。")]),a._v(" "),s("li",[a._v("在这些容器上，Flink会部署JobManager和TaskManager实例，从而启动集群。")]),a._v(" "),s("li",[a._v("Flink根据运行在JobManager上的作业所需的Slot数量动态分配TaskManager资源。")])]),a._v(" "),s("h2",{attrs:{id:"相关准备和配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关准备和配置"}},[a._v("#")]),a._v(" 相关准备和配置")]),a._v(" "),s("p",[a._v("将Flink任务部署到Yarn集群之前，需要先安装Hadoop集群。")]),a._v(" "),s("p",[a._v("有两种方式配置，第一种是将"),s("code",[a._v("flink-shaded-hadoop3-uber-blink-xxx.jar")]),a._v("放到Flink_HOME的lib目录下，这种方式比较方便，但是需要自己去找对应适配好的Flink-Hadoop对应版本，如果没有需要自己编译维护。第二种是指定Hadoop集群的环境变量，也是"),s("strong",[a._v("推荐使用第二种方式")]),a._v("，具体配置步骤如下：")]),a._v(" "),s("ol",[s("li",[a._v("配置环境变量，增加环境变量配置如下：")])]),a._v(" "),s("p",[a._v("编辑环境变量配置文件，此处是在"),s("code",[a._v("profile.d")]),a._v("目录下专门建立一个文件存放环境变量，因此"),s("code",[a._v("vim /etc/profile.d/my_env.sh")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/module/hadoop-3.3.4\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HADOOP_HOME")]),a._v("/bin:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HADOOP_HOME")]),a._v("/sbin\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_CONF_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HADOOP_HOME}")]),a._v("/etc/hadoop\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("hadoop classpath"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("更改配置后，记得生效一下"),s("code",[a._v("source /etc/profile")])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("启动hadoop集群，包括HDFS和YARN")])]),a._v(" "),s("img",{attrs:{src:a.$withBase("/12.png")}}),a._v(" "),s("p",[a._v("到这里，相关的准备和配置就完成了。")]),a._v(" "),s("h2",{attrs:{id:"会话模式部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#会话模式部署"}},[a._v("#")]),a._v(" 会话模式部署")]),a._v(" "),s("p",[a._v("Yarn的会话模式与Standalone模式的集群策略有所不同，需要首先申请一个YARN Session来启动Flink集群，具体步骤如下：")]),a._v(" "),s("ol",[s("li",[a._v("启动集群")])]),a._v(" "),s("p",[a._v("执行命令向YARN集群申请资源，开启一个YARN会话，启动Flink集群")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("bin/yarn-session.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/13.png")}}),a._v(" "),s("p",[a._v("执行命令的参数都可以通过如下命令查看")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("bin/yarn-session.sh --help\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/14.png")}}),a._v(" "),s("p",[a._v("看不懂的参数就翻译下咯")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("注意：FLink从1.11.0版本后不在使用-n参数和-s参数分别指定TaskManager数量和slot数量，YARN会按照需求动态分配TaskManager和slot。所以从某种意义上来说，"),s("strong",[a._v("YARN的会话模式也不会把集群资源固定，同样也是动态分配的")]),a._v("。")]),a._v(" "),s("p",[a._v("这个也好验证，使用YARN Session提交一个作业，再把作业停掉，等待个1分钟这样，会发现资源被释放了")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("提交作业")])]),a._v(" "),s("p",[a._v("有两种方式提交，一种是通过Web UI进行提交")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/15.png")}}),a._v(" "),s("p",[a._v("还有一种就是通过命令行的方式进行提交，也是比较建议的方式，执行如下命令即可")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("bin/flink run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" org.apache.flink.streaming.examples.windowing.TopSpeedWindowing examples/streaming/TopSpeedWindowing.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/16.png")}}),a._v(" "),s("p",[a._v("如上就发现作业成功运行了，这里我们可以使用"),s("code",[a._v("-m")]),a._v("参数显示的指定YARN Session地址，但是为什么我们没指定也能提交呢，原因在这里，日志里边有个"),s("code",[a._v("/tmp/.yarn-properties-root")])]),a._v(" "),s("img",{attrs:{src:a.$withBase("/17.png")}}),a._v(" "),s("p",[a._v("这个文件里边就保存了最新的YARN 集群的一些记录信息，因此，如果你遇到了启动YARN集群提交作业后想再使用Standalone模式任务会发现提交不了，这时候就应该把这个文件删除掉就行了")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/18.png")}}),a._v(" "),s("p",[a._v("刚才在上面说到一个YARN Session也支持动态分配资源了，正好来实验一下，如下图，当作业被停止后")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/19.png")}}),a._v(" "),s("p",[a._v("会发现slot的数量从1变成0了，这时候集群中多了一个slot的资源，大概等了约半小时，这个slot被释放了，这时候YARN Session中没有slot了，这就说明，"),s("strong",[a._v("YARN的会话模式也不会把集群资源固定，同样也是动态分配的")])]),a._v(" "),s("img",{attrs:{src:a.$withBase("/20.png")}}),a._v(" "),s("h2",{attrs:{id:"单作业模式部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单作业模式部署"}},[a._v("#")]),a._v(" 单作业模式部署")]),a._v(" "),s("p",[a._v("在YARN环境中，由于有了外部平台做资源调度，所以我们也可以直接向YARN提交一个单独的作业，从而启动一个Flink集群。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("这种方式过时了，后面会被应用模式部署渐渐替代，当然，在较老Flink版本当中还是经常使用的")])]),s("p",[a._v("1， 执行命令提交作业")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("bin/flink run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" yarn-per-job "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" org.apache.flink.streaming.examples.windowing.TopSpeedWindowing examples/streaming/TopSpeedWindowing.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果启动过程中报错如下异常不要慌，作业其实已经正常提交了，且这个报错也给出了解决方案了，去配置文件里忽略一些就行")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/21.png")}}),a._v(" "),s("p",[a._v("修改"),s("code",[a._v("conf/flink-conf.yaml")]),a._v("，添加如下配置")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("classloader.check-leaked-classloader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("查看或者取消作业，命令如下：")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[a._v("说明：这里先提一点，cancel取消作业不会保存savepoint，stop停止作业会保存savepoint，后面会验证")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看application下运行的flink作业")]),a._v("\nbin/flink list "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" yarn-per-job "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dyarn.application.id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("application_XXXX_YY\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止flink作业 需要指定jobId")]),a._v("\nbin/flink cancel "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" yarn-per-job "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dyarn.application.id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("application_XXXX_YY "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("jobId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("当然也可以暴力停止，或者页面上点击cancel也行")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" application "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-list")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" application "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-kill")]),a._v(" appId\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"应用模式部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用模式部署"}},[a._v("#")]),a._v(" 应用模式部署")]),a._v(" "),s("p",[a._v("应用模式部署直接执行"),s("code",[a._v("flink run-application")]),a._v("命令即可")]),a._v(" "),s("h3",{attrs:{id:"本地提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地提交"}},[a._v("#")]),a._v(" 本地提交")]),a._v(" "),s("p",[s("strong",[a._v("作业jar包、flink的lib目录下的文件在本地")])]),a._v(" "),s("p",[a._v("相关执行参数可以查询")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("bin/flink run-application "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/22.png")}}),a._v(" "),s("ol",[s("li",[a._v("执行命令行提交作业")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("bin/flink run-application -t yarn-application -c org.apache.flink.streaming.examples.windowing.TopSpeedWindowing examples/streaming/TopSpeedWindowing.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/23.png")}}),a._v(" "),s("p",[a._v("同时也可以去Yarn的Web UI上查看，这里提一嘴，如下发现这个任务把队列的资源使用满了，如果这时候新的任务也是提交到这个队列上的话，那就会一直是ACCEPT状态，解决方法是要不加大YARN资源，要么换个队列提交，或者更改YARN队列的资源容量")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/24.png")}}),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("停止作业")])]),a._v(" "),s("p",[a._v("停止作业的方式和单作业模式一样，往上翻翻就看到咯。")]),a._v(" "),s("h3",{attrs:{id:"上传hadoop提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传hadoop提交"}},[a._v("#")]),a._v(" 上传Hadoop提交")]),a._v(" "),s("p",[a._v("可以通过"),s("code",[a._v("yarn.provided.lib.dirs")]),a._v("配置选项指定位置，将flink的依赖上传到远程，先把jar包和所需要的lib依赖上传到hdfs上，可以大大的降低客户端传输作业的资源提高提交效率。")]),a._v(" "),s("ol",[s("li",[a._v("上传flink的lib和plugins到HDFS路径上")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("hadoop fs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-mkdir")]),a._v(" /flink-dist\nhadoop fs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-put")]),a._v(" lib/ /flink-dist\nhadoop fs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-put")]),a._v(" plugins/ /flink-dist\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/25.png")}}),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("上传作业jar包到HDFS")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("hadoop fs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-mkdir")]),a._v(" /flink-jars\nhadoop fs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-put")]),a._v(" FlinkTutorial-1.0-SNAPSHOT.jar /flink-jars\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/26.png")}}),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("提交作业")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("bin/flink run-application "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" yarn-application "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dyarn.provided.lib.dirs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hdfs://bigdata:8020/flink-dist"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" org.apache.flink.streaming.examples.windowing.TopSpeedWindowing hdfs://bigdata:8020/flink-jars/TopSpeedWindowing.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:a.$withBase("/27.png")}}),a._v(" "),s("p",[a._v("这种方式下，Flink本身的依赖和作业jar包预先上传到HDFS上，而不需要每次单独发送到集群，这就使得作业提交非常的轻量，因此作业提交效率也是相对较快的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);