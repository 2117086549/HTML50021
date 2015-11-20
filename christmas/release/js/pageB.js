/**
 * �ڶ�������ҳ��
 *
 */
function PageB(element) {

    var $element  = element;
    //ʥ���к�
    var $boy      = $element.find(".boy-walk");
    //3d��ת
    var $carousel = $element.find("#carousel");
    //Ů��
    var $girl     = $element.find(".girl-book");
    //è
    var $cat      = $element.find(".cat");


    $boy.transition({
        "right": "5rem"
    }, 500, "linear", function() {
        $boy.removeClass("boy-walk-animate")
        setTimeout(function() {
            $girl.addClass("girl-book-getUp");
            setTimeout(function() {
                $girl.addClass("girl-book-run")
                //è��
                $cat.addClass("cat-book");
                //СŮ����·
                $girl.addClass("girl-walk")
                    .transition({
                        "left": "5.5rem"
                    }, 500, "linear", function() {
                        $girl.addClass("walk-stop")
                        // $girl.addClass("girl-choose").addClass("walk-run")
                    })



            }, 1000)
        }, 500)


        //�򿪰���
        $boy
        .addClass("walk-stop")
        .addClass("boy-unwrapp")
        .addClass("walk-run")
        .one(support.animationEnd, function() {
            showCarousel()

            setTimeout(function(){
                 $girl.addClass("girl-choose").addClass("walk-run")
            },1000)

        })
    });



    /**
     * ��ʾ3d��תľ��
     * @return {[type]} [description]
     */
    function showCarousel(){
         //3d��ת
        var carousel = new Carousel($carousel, {
            imgUrls: [
                "assets/carousel/1.png",
                "assets/carousel/2.png",
                "assets/carousel/3.png"
            ],
            videoUrls: [
                "assets/carousel/1.mp4",
                "assets/carousel/2.mp4",
                "assets/carousel/3.mp4"
            ]
        });
        carousel.run();       
    }

}


    /**
     *  css3�ؼ�֡�㷨
     * @param {[type]} row   [description]
     * @param {[type]} col   [description]
     * @param {[type]} count [description]
     */
    function calculationKeyframes(col, row, count) {
        //��������step�Ĵ���
        //  0 1 2
        //  3 4 5
        //  6 7 8
        var keyframes = [];
        var base = 100 / count;
        //�״�
        keyframes.push(0 + '% { background-position:0% 0%}')
        for (var i = 0; i < count; i++) {
            //��ǰ����
            var currRow = Math.ceil((i + 1) / col); //��ǰ����
            var currCol = Math.floor(i / col); //��ǰ����  
            var period = currCol * col; //ÿ������  
            var x = 100 * (i - period)
            var y = 100 * currCol;
            x = x == 0 ? x : "-" + x;
            y = y == 0 ? y : "-" + y;
            keyframes.push(((i + 1) * base) + '% { background-position: ' + x + '% ' + y + '%}')
        }
        return keyframes.join("")
    }
