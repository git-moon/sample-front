import Vue from 'vue'

Vue.filter('datetimeFormat', function (datetime) {
    if (!datetime) {
        return ''
    }
    let d = datetime.split('T'),
        ymd = d[0],
        hm = d[1].slice(0,5)
    return `${ymd} \n${hm}`
})

Vue.filter('dateFormat', function (datetime) {
    if (!datetime) {
        return ''
    }
    let d = datetime.split('T'),
        ymd = d[0]
    return `${ymd}`
})