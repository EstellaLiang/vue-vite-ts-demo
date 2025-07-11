import type {App} from "vue";
import {setupStore} from "@/stores";
import {setupRouter} from "@/router";

export default {
    install(app: App<Element>) {
        // 状态管理器
        setupStore(app);
        // 路由管理
        setupRouter(app);
    }
}
