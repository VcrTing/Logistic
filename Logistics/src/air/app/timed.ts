import moment from "moment"

const WEEK = [
    '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日',
]
export default {
    // 获取 星期的句子
    week_word (mmt_or_str: string | moment.MomentInput): string {
        return WEEK[ Number.parseInt(moment(mmt_or_str).day() + '') - 1 ] // WEEK( Number.parseInt( moment(mmt_or_str).day() ) )
    },

    // 后台专用时间格式
    himmer_time(iong: boolean = false): string {
        return iong ? moment().format('yyyy-MM-DD hh:mm:ss') : moment().format('yyyy-MM-DD')
    },

    // 前端展示
    view_time(src: string, spii: string = '-'): string {
        return src ? moment( src ).format('yyyy' + spii + 'MM' + spii + 'DD') : src
    },

    //
    now(spii: string = '-') { return moment().format('yyyy' + spii + 'MM' + spii + 'DD') },

    // 
    fmt_time(src: string, spii: string = '/') {
        if (src) { 
            const st_spi = src.split( spii )
            if (st_spi.length > 2) {

                if (st_spi[1].length < 2) {
                    st_spi[1] = '0' + st_spi[1]
                }
                if (st_spi[2].length < 2) {
                    st_spi[2] = '0' + st_spi[2]
                }

                return st_spi.join('-')
            }
        }
        return moment().format('yyyy-MM-DD')
    }
}