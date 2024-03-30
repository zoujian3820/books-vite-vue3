import goodStorage from 'good-storage';
export class LmgUtil {
    static storageLmgList() {
        this.imgList = goodStorage.get('imgList') || {};
        if (this.isEmpty()) {
            this.loadAllLmg();
            goodStorage.set('imgList', this.imgList);
        }
    }
    static isEmpty() {
        return !Object.getOwnPropertyNames(this.imgList).length;
    }
    static getImg(imgName) {
        return LmgUtil.imgList[imgName];
    }
    static loadAllLmg() {
        // import.meta.globEager在vite4.0中弃用
        // const imgMap = import.meta.globEager("../assets/img/**/*.png")
        // const imgMap: Record<string, any> =
        // const imgMap: Record<string, { [key: string]: string }> =
        // const imgMap: Record<string, { [key in string]: string }> =
        const imgMap = import.meta.glob('../assets/img/**/*.png', { eager: true });
        console.log('imgMap:', imgMap);
        let absolutePath = ''; //绝对路径。
        let imgName = ''; // 图片名
        for (const relatviePath in imgMap) {
            absolutePath = imgMap[relatviePath].default; //
            if (absolutePath) {
                imgName = decodeURIComponent(absolutePath.substring(absolutePath.lastIndexOf('/') + 1));
                this.imgList[imgName] = absolutePath;
            }
        }
        console.log('this.imgList:', this.imgList);
    }
}
LmgUtil.imgList = {};
export default LmgUtil.getImg;
