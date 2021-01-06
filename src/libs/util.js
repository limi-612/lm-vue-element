import Cookies from 'js-cookie';
// import { turn } from "core-js/fn/array";

let util = {}

util.setTitle = function (vm, route) {
    let meta = getRouteTitleHandled(vm,route)
    window.document.title = meta.title
}
export const getRouteTitleHandled = (vm,route) => {
    let router = { ...route }
    let meta = { ...route.meta }
    let title = ''
    if (meta.title) {
        if (typeof meta.title === 'function') {
        title = router.params.id
        } else title = vm.$t(meta.title)
    }
    meta.title = title
    return meta
}

util.openNewPage = function (vm, route) {
    if (!vm.$store) { return }
    let routeParam = route
    let appRouter = vm.$store.state.AllPages
    let openPages = vm.$store.state.openPages
    let cachePage = vm.$store.state.cachePage
    for (let a = 0; a < appRouter.length; a++) {
        if (appRouter[a].children) {
            for (let b = 0; b < appRouter[a].children.length; b++) {
                if (appRouter[a].children[b].path == routeParam.path) {
                    cachePage.indexOf(routeParam.path) >= 0 ? '' :
                        openPages.push({
                            component: appRouter[a].children[b].component,
                            meta: getRouteTitleHandled(vm,routeParam),
                            name: appRouter[a].children[b].name,
                            path: appRouter[a].children[b].path
                        }), cachePage.push(routeParam.path)
                } else if (appRouter[a].children[b].name == routeParam.name && appRouter[a].children[b].path != routeParam.path) {
                    cachePage.indexOf(routeParam.path) >= 0 ? '' :
                        openPages.push({
                            component: appRouter[a].children[b].component,
                            meta: getRouteTitleHandled(vm,routeParam),
                            name: appRouter[a].children[b].name,
                            path: routeParam.path
                        }), cachePage.push(routeParam.path)
                }
            }
        }
    }
}

util.setDisplayPage = function (data, restrictedData) {
    // let showSeates
    if (restrictedData) {
        for (let a = 0; a < data.length; a++) {
            restrictedData['halfCheckedKeys'].indexOf(data[a].id) >= 0 || restrictedData['checkedKeys'].indexOf(data[a].id) >= 0 ? data[a].show = true : data[a].show = false
            if (data[a].children) {
                for (let b = 0; b < data[a].children.length; b++) {
                    restrictedData['checkedKeys'].indexOf(data[a].children[b].id) >= 0 ? data[a].children[b].show = true : data[a].children[b].show = false
                }
            }
        }
    } else {
        for (let a = 0; a < data.length; a++) {
            Cookies.get('userInfo') == 'admin' ? data[a].show = true : data[a].show = false
            if (data[a].children) {
                for (let b = 0; b < data[a].children.length; b++) {
                    Cookies.get('userInfo') == 'admin' ? data[a].children[b].show = true : data[a].children[b].show = false
                }
            }
        }
    }

}

util.getMenuPermissionData = function (vm, list) {
    let menuData = JSON.parse(JSON.stringify(list))
    let menuIds = []
    for (let a = 0; a < menuData.length; a++) {
        menuData[a]['label'] = vm.$t(menuData[a].meta.title)
        menuIds.push(menuData[a].id)
        if (menuData[a].children) {
            for (let b = 0; b < menuData[a].children.length; b++) {
                menuData[a].children[b]['label'] = vm.$t(menuData[a].children[b].meta.title)
                menuIds.push(menuData[a].children[b].id)
            }
        }
    }

    return { 'data': menuData, 'ids': menuIds }
}



export default util;