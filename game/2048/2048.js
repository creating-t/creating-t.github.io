var game={
    data:[],//�����������ֵĶ�ά����
    rn:4, //������
    cn:4, //������
    state: 0, //��Ϸ��ǰ״̬��Running|GameOver
    RUNNING:1,
    GAMEOVER:0,
    score:0, //����
    isGameOver:function(){//�ж���Ϸ״̬Ϊ����
        //���û����,�򷵻�false
        if(!this.isFull()){
            return false;
        }else{//����
            //�����Ͻǵ�һ��Ԫ�ؿ�ʼ��������ά����
            for(var row=0;row<this.rn;row++){
                for(var col=0;col<this.cn;col++){
                    //�����ǰԪ�ز������Ҳ�Ԫ��
                    if(col<this.cn-1){
                    //    �����ǰԪ��==�Ҳ�Ԫ��
                        if(this.data[row][col]==
                            this.data[row][col+1]){
                            return false;
                        }
                    }
                    //�����ǰԪ�ز������·�Ԫ��
                    if(row<this.rn-1){
                    //    �����ǰԪ��==�·�Ԫ��
                        if(this.data[row][col]==
                            this.data[row+1][col]){
                            return false;
                        }
                    }
                }
            }return true;
        }
    },
    start:function(){//��Ϸ��ʼ
        this.state=this.RUNNING;
        //�ҵ���Ϸ�������棬����
        var div=document.getElementById("gameOver");
        div.style.display="none";
        this.data=[//��ʼ����ά����
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
        this.score=0; //���÷���Ϊ0
        /*for(var r=0;r<this.rn;r++){
            this.data[r]=[];//������������ÿһ������
            for(var c=0;c<this.cn;c++){
                //��ǰ���������м�Ĭ��Ԫ��0
                this.data[r][c]=0;
            }
        }*/
        //���������λ������2��4
        this.randomNum();
        this.randomNum();
        //�����ݸ��µ�ҳ��
        this.updateView();
    },
    isFull:function(){//�жϵ�ǰ�����Ƿ�����
for(var row=0;row<this.rn;row++){//������ά����
    for(var col=0;col<this.cn;col++){
        //    ֻҪ���ֵ�ǰԪ��==0
        if(this.data[row][col]==0){
            return false;
        }
    }
}
        //(���ѭ�������˳�)
        return true;
    },
    randomNum:function(){//�������λ������һ����
        if(!this.isFull()){//���*��*������{
            while(true){//ѭ��true
                //0-3�������һ���к�row
                var row=parseInt(Math.random()*this.rn);
                //0-3�������һ���к�col
                var col=parseInt(Math.random()*this.cn);
                //���data[row][col]==0
                if(this.data[row][col]==0){
                //    Math.random():<0.5  >=0.5
                //                  2      4
                //    �������һ����<0.5?2:4��
                //    ����data[row][col]
                    this.data[row][col]=
                                Math.random()<0.5?2:4;
                    break;//�˳�ѭ��   
                }
            }
        }
    },
    updateView:function(){
//����ά������ÿ��������ַ���ǰ������
//������ά������ÿ��Ԫ��,����:row=2,col=3, 16
for(var row=0;row<this.rn;row++){
    for(var col=0;col<this.cn;col++){
        /*��ҳ��һ��Ԫ�أ����ԣ����ֶ��Ƕ���*/
        var div=document.getElementById("c"+row+col);
                                         //"c23"
        var curr=this.data[row][col]; //��ǰԪ��ֵ
        //�޸�div��ʼ��ǩ�ͽ�����ǩ֮�������
        div.innerHTML=curr!=0?curr:"";
        //�޸�div��class����
        div.className=curr!=0?"cell n"+curr:"cell"
        //   class
    }
}
    var span=document.getElementById("score");
    span.innerHTML=this.score;
 
    //�жϲ��޸���Ϸ״̬ΪGAMEOVER
    if(this.isGameOver()){
        this.state=this.GAMEOVER;
        var div=document.getElementById("gameOver");
        var span=document.getElementById("finalScore");
        span.innerHTML=this.score;
    //�޸�div��style�����µ�display������Ϊ"block"
        div.style.display="block";
    }
 
    },//updateView�����Ľ���
    /*ʵ������*/
    /*�ҵ�ǰλ���Ҳ࣬*��һ��*��Ϊ0����*/
    getRightNext:function(row,col){
        //ѭ������:nextc����>ָ��һ��Ԫ�ص����±�
        //��col+1��ʼ,����row����ʣ��Ԫ�أ�<cn����
        for(var nextc=col+1;nextc<this.cn;nextc++){
        //    �����������Ԫ��!=0
            if(this.data[row][nextc]!=0){
        //        �ͷ���nextc
                return nextc;
            }
        }return -1;//(ѭ�������˳�����)����-1
    },
    /*�жϲ�����*ָ����*�е�ÿ��Ԫ��*/
    moveLeftInRow:function(row){
        //col��0��ʼ������row���е�ÿ��Ԫ�أ�<cn-1����
        for(var col=0;col<this.cn-1;col++){
        //  ��õ�ǰԪ����һ����Ϊ0��Ԫ�ص��±�nextc
            var nextc=this.getRightNext(row,col);
        //  ���nextc==-1��(˵�����û��!=0��Ԫ����)
            if(nextc==-1){
                break;
            }else{//  ����
        //      �����ǰλ��==0,
                if(this.data[row][col]==0){
        //          ����һ��λ�õ�ֵ�����뵱ǰλ��
                    this.data[row][col]=
                        this.data[row][nextc];
        //          ��һ��λ������Ϊ0
                    this.data[row][nextc]=0;
                    col--;//��col��һ���ظ����һ��
                }else if(this.data[row][col]==
                            this.data[row][nextc]){
        //      ���������ǰλ��==nextc��λ��
        //          ����ǰλ��*=2;
                    this.data[row][col]*=2;
        //          ��һ��λ������Ϊ0;
                    this.data[row][nextc]=0;
        //          ����ǰλ�õ�ֵ���ۼӵ�score��
                    this.score+=this.data[row][col];
                }
            }
        }
    },
    /*�ƶ�������*/
    moveLeft:function(){
        var oldStr=this.data.toString();
        //ѭ������ÿһ��
        for(var row=0;row<this.rn;row++){
        //    ����moveLeftInRow���������뵱ǰ�к�row
            this.moveLeftInRow(row);
        }//(ѭ��������)
        var newStr=this.data.toString();
        if(oldStr!=newStr){
            //����randomNum()���������һ����
            this.randomNum();
            //����updateView()������ҳ��
            this.updateView();
        }
    },
    moveRight:function(){
        var oldStr=this.data.toString();
        for(var row=0;row<this.rn;row++){
            this.moveRightInRow(row);
        }
        var newStr=this.data.toString();
        if(oldStr!=newStr){
            this.randomNum();
            this.updateView();
        }
    },
    /*�жϲ�����*ָ����*�е�ÿ��Ԫ��*/
    moveRightInRow:function(row){
        //col��cn-1��ʼ����>0����
        for(var col=this.cn-1;col>0;col--){
            var nextc=this.getLeftNext(row,col);
            if(nextc==-1){
                break;
            }else{
                if(this.data[row][col]==0){
                    this.data[row][col]=
                        this.data[row][nextc];
                    this.data[row][nextc]=0;
                    col++;
                }else if(this.data[row][col]==
                            this.data[row][nextc]){
                    this.data[row][col]*=2;
                    this.data[row][nextc]=0;
                    this.score+=this.data[row][col];
                }
            }
        }
    },
    /*�ҵ�ǰλ����࣬��һ����Ϊ0����*/
    getLeftNext:function(row,col){
        //nextc��col-1��ʼ������row����ʣ��Ԫ�أ�>=0����
        for(var nextc=col-1;nextc>=0;nextc--){
            //    ���������У�ͬgetRightNext
            if(this.data[row][nextc]!=0){
                return nextc;
            }
        }return -1;
    },
    /*�������λ���·���Ϊ0��λ��*/
    getDownNext:function(row,col){
        //nextr��row+1��ʼ����<this.rn����
        for(var nextr=row+1;nextr<this.rn;nextr++){
            if(this.data[nextr][col]!=0){
                return nextr;
            }
        }return -1;
    },
    /*�жϲ�����*ָ����*�е�ÿ��Ԫ��*/
    moveUpInCol:function(col){
        //row��0��ʼ����<rn-1������ÿ��Ԫ��
        for(var row=0;row<this.rn-1;row++){
        //  �Ȼ�õ�ǰλ���·���Ϊ0����nextr
            var nextr=this.getDownNext(row,col);
            if(nextr==-1){ break; //  ���nextr==-1
            }else{//  ����
        //      �����ǰλ�õ���0
                if(this.data[row][col]==0){
        //          ����ǰλ���滻Ϊnextrλ�õ�Ԫ��
                    this.data[row][col]=
                            this.data[nextr][col];
        //          ��nextrλ������Ϊ0
                    this.data[nextr][col]=0;
                    row--;//��һ�У���ѭ��ʱ����ԭλ
                }else if(this.data[row][col]==
                            this.data[nextr][col]){
                //      ���������ǰλ�õ���nextrλ��
        //          ����ǰλ��*=2
                    this.data[row][col]*=2;
        //          ��nextrλ������Ϊ0
                    this.data[nextr][col]=0;
        //          ����ǰλ�õ�ֵ�ۼӵ�score������
                    this.score+=this.data[row][col];
                }
            }
        }
    },
    /*����������*/
    moveUp:function(){
        var oldStr=this.data.toString();
        //����������
for(var col=0;col<this.cn;this.moveUpInCol(col++));
        var newStr=this.data.toString();
        if(oldStr!=newStr){
            this.randomNum();
            this.updateView();
        }
    },
    /*����������*/
    moveDown:function(){
        var oldStr=this.data.toString();
for(var col=0;col<this.cn;this.moveDownInCol(col++));
        var newStr=this.data.toString();
        if(oldStr!=newStr){
            this.randomNum();
            this.updateView();
        }
    },
    moveDownInCol:function(col){
        //row��this.rn-1����>0������row--
        for(var row=this.rn-1;row>0;row--){
            var nextr=this.getUpNext(row,col);
            if(nextr==-1){
                break;
            }else{
                if(this.data[row][col]==0){
                    this.data[row][col]=
                            this.data[nextr][col];
                    this.data[nextr][col]=0;
                    row++;
                }else if(this.data[row][col]==
                            this.data[nextr][col]){
                    this.data[row][col]*=2;
                    this.data[nextr][col]=0;
                    this.score+=this.data[row][col];
                }
            }
        }
    },
    /*�������λ���Ϸ���Ϊ0��λ��*/
    getUpNext:function(row,col){
        for(var nextr=row-1;nextr>=0;nextr--){
            if(this.data[nextr][col]!=0){
                return nextr;
            }
        }return -1;
    }
}
//onload�¼�����ҳ�����*��*�Զ�ִ��
window.onload=function(){
    game.start();//ҳ����غ��Զ�������Ϸ
    //�������̰���ʱ�������ƶ�:
    document.onkeydown=function(){
        //����¼������м��̺ţ�2��
        //�¼��������¼�����ʱ�Զ�����
        //          ��װ���¼�����Ϣ
        if(game.state==game.RUNNING){
            //Step1: ����¼�����
            var e=window.event||arguments[0];
                    //IE         DOM��׼
            //Step2: ��ü��̺�:e.keyCode
            if(e.keyCode==37){
                game.moveLeft();
            }else if(e.keyCode==39){
                game.moveRight();
            }else if(e.keyCode==38){
                game.moveUp();
            }else if(e.keyCode==40){
                game.moveDown();
            }
            //��������������moveLeft
            //����������Ҽ�������moveRight
        }
    }
}