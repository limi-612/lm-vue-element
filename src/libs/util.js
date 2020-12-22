import { appRouter } from "../router/router"

let util = {}

util.setTitle = function (vm, route) {
    window.document.title = vm.$t(route.meta.title)
}

util.openNewPage = function (vm, route) {
    if (!vm.$store) { return }
    let routeParam = route
    let openPages = vm.$store.state.openPages
    let cachePage = vm.$store.state.cachePage
    for (let a = 0; a < appRouter.length; a++) {
        if (appRouter[a].children) {
            for (let b = 0; b < appRouter[a].children.length; b++) {
                if (appRouter[a].children[b].path == routeParam.path) {
                    cachePage.indexOf(routeParam.path) >= 0 ? '' :
                        openPages.push(appRouter[a].children[b]), cachePage.push(routeParam.path)
                } else if (appRouter[a].children[b].name == routeParam.name && appRouter[a].children[b].path != routeParam.path) {
                    cachePage.indexOf(routeParam.path) >= 0 ? '' :
                        openPages.push({
                            component: appRouter[a].children[b].component,
                            meta: appRouter[a].children[b].meta,
                            name: appRouter[a].children[b].name,
                            path: routeParam.path
                        }), cachePage.push(routeParam.path)
                }
            }
        }
    }
}

util.displayPage = function (vm, list) {

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