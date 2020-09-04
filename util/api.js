const BASE_URL = "https://hmapi.xmint.cn";
export const myRequest = (optinos) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + optinos.url,
            method: optinos.method || 'GET',
            data: optinos.data || {},
            success: (res) => {
                if (res.data.status != 0)
                    return uni.showToast({ title: "数据获取失败", icon: 'none' });
                resolve(res);
            },
            fail: (err) => {
                uni.showToast({ title: "数据获取失败", icon: 'none' });
                reject(err);
            }
        })
    })
}