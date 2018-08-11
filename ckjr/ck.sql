SET NAMES UTF8;
DROP TABLE IF EXISTS `ck_user`;
CREATE TABLE `ck_user` (
   `uid` int(11) primary key auto_increment,
   `uname` varchar(32) ,
   `upwd` varchar(32) not null,
   `phone` varchar(32) not null unique,
   `email` varchar(32) ,
   `money` DECIMAL(20,2) ,
   `lixi`  DECIMAL(20,2)
);
INSERT INTO `ck_user` (`uid`, `uname`, `upwd`, `phone`, `email`, `money`, `lixi`) VALUES
(1, '张三', 's16034760', '0000000000', '', '', ''),
(2, '', 's16034760', '18655541111', '', '', ''),
(3, '', 's1562222222', '18651177555', '', '', ''),
(4, '', 's1562222222', '18651177556', '', '', ''),
(5, '', 's16034760', '18551177933', '', '', ''),
(6, '', 's16034760', '18511779333', '', '', ''),
(7, '', 's16034760', '18551137790', '', '', '');

DROP TABLE IF EXISTS `ck_imgs`;
CREATE TABLE `ck_imgs` (
    `iid` int(11) primary key auto_increment,
    `tab_id` int(11) ,
    `sm` varchar(128) ,
    `md` varchar(128) ,
    `lg` varchar(128) ,
    `img_msg` varchar(128),
    `img_href` varchar(128)
);
INSERT INTO `ck_imgs` VALUES(1,1,'','','img/2018-06-06_scrollPic_1528275326698.jpg','','#');
INSERT INTO `ck_imgs` VALUES(2,1,'','','img/Z.jpg','','#');
INSERT INTO `ck_imgs` VALUES(3,1,'','','img/download.jpg','','#');
INSERT INTO `ck_imgs` VALUES(4,1,'','','img/ZrxxNYqNtwAAAAASUVORK5CYII=.png','','#');
INSERT INTO `ck_imgs` VALUES(6,2,'','img/2018-06-13_article_1528885116843.jpg','','顶级金融峰会Money20/20在荷...','#');
INSERT INTO `ck_imgs` VALUES(7,2,'','img/2018-06-14_article_1528972530383.jpg','','杭州互金协会服务热线开通仪式成功举行...','#');
INSERT INTO `ck_imgs` VALUES(8,2,'','img/2018-05-09_article_1525835379870.jpg','','【重要通知】创客金融资金安全再升级！','#');
INSERT INTO `ck_imgs` VALUES(9,2,'','img/2018-04-09_article_1523263598527.jpg','','【投资者风险教育之猪太富课堂】P2P...','#');
INSERT INTO `ck_imgs` VALUES(10,2,'','img/2018-03-05_article_1520230717331.jpg','','创客金融荣获“杭州市高新技术企业”','#');
INSERT INTO `ck_imgs` VALUES(11,3,'','img/2018-06-13_article_1528883914394.jpg','','助力高考学子！创客金融爱心助考车队助...','#');
INSERT INTO `ck_imgs` VALUES(12,3,'','img/2018-06-13_article_1528881704236.jpg','','支持高金 | 创客金融周洋：助力高金...','#');
INSERT INTO `ck_imgs` VALUES(13,3,'','img/2018-06-05_article_1528184232552.jpg','','创客金融携手交通91.8启动爱心助考...','#');
INSERT INTO `ck_imgs` VALUES(14,3,'','img/2018-06-13_article_1528881926930.jpg','','创客金融公益植树行 为亚运村添一片绿...','#');
INSERT INTO `ck_imgs` VALUES(15,3,'','img/2018-06-14_article_1528973178330.jpg','','托起明天的太阳！ 杜皮乡三庙河小学“...','#');
INSERT INTO `ck_imgs` VALUES(16,4,'img/friend17.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(17,4,'img/friend11.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(18,4,'img/friend8.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(19,4,'img/friend13.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(20,4,'img/friend1.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(21,4,'img/friend12.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(22,4,'img/friendlts.png','','','','#');
INSERT INTO `ck_imgs` VALUES(23,4,'img/friend4.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(24,4,'img/friend5.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(25,4,'img/friend6.jpg','','','','#');
INSERT INTO `ck_imgs` VALUES(26,5,'','','img/ba.jpg','2017-12-31 更新','#');
INSERT INTO `ck_imgs` VALUES(27,5,'','','img/gqjg.jpg','2017-12-31 更新','#');
INSERT INTO `ck_imgs` VALUES(28,5,'','','img/jg_1.jpg','2017-12-31 更新','#');
INSERT INTO `ck_imgs` VALUES(29,5,'','','img/yg1_1.jpg','2017-12-31 更新','#');

DROP TABLE IF EXISTS `ck_yqr`;
CREATE TABLE `ck_yqr` (
  `yqr_id` int(11) NOT NULL auto_increment,
  `yqr_name` varchar(32) NOT NULL,
  `yqr_phone` varchar(11) NOT NULL,
  `yqr_lid` int(11) NOT NULL,
  PRIMARY KEY  (`yqr_id`)
);
INSERT INTO `ck_yqr` (`yqr_id`, `yqr_name`, `yqr_phone`, `yqr_lid`) VALUES
(1, '李四', '15062355799', 1);


DROP TABLE IF EXISTS `ck_label`;
CREATE TABLE `ck_label` (
  `lid` int(11) NOT NULL auto_increment,
  `cpm` int(11) ,
  `days` int(4) ,
  `limg` varchar(128) ,
  `limg_msg` varchar(128) ,
  `war` int(11) ,
  `exc` varchar(128) ,
  `label_count` int(11) ,
  PRIMARY KEY  (`lid`)
);
INSERT INTO `ck_label` VALUES(1,0,25,'img/2017-05-12_mall_little_1494574416453.jpg','1.5%加息券',1000,'期限25天及以上',1000);
INSERT INTO `ck_label` VALUES(2,5000,25,'img/16_s.jpg','16元红包券',4000,'借5000.00元及以上,期限25天及以上',10000);
INSERT INTO `ck_label` VALUES(3,100000,25,'img/370_s.jpg','370元红包券',6500,'出借100000.00元及以上,期限25天及以上',800);
INSERT INTO `ck_label` VALUES(4,1000,25,'img/3_s.jpg','3元红包券',2500,'出1000.00元及以上,期限25天及以上',10000);
INSERT INTO `ck_label` VALUES(5,10000,80,'img/50_s.jpg','50元红包券',2500,'借10000.00元及以上,期限80天及以上',9000);
INSERT INTO `ck_label` VALUES(6,20000,80,'img/100_s.jpg','100元红包券',2500,'出借20000.00元及以上,期限80天及以上',10000);
INSERT INTO `ck_label` VALUES(7,50000,360,'img/888_s.jpg','888元红包券',3000,'出借50000.00元及以上,期限360天及以上',6000);
INSERT INTO `ck_label` VALUES(8,30000,360,'img/518_s.jpg','518元红包券',3500,'出借30000.00元及以上,期限360天及以上',10000);
INSERT INTO `ck_label` VALUES(9,100000,360,'img/2188_s.jpg','2188元红包券',2500,'出借100000.00元及以上,期限360天及以上',10000);
INSERT INTO `ck_label` VALUES(10,50000,80,'img/255_s.jpg','255元红包券',3000,'出借50000.00元及以上,期限80天及以上',1900);
INSERT INTO `ck_label` VALUES(11,50000,25,'img/168_s.jpg','168元红包券',4500,'出借50000.00元及以上,期限25天及以上',9950);
INSERT INTO `ck_label` VALUES(12,60000,170,'img/500_s.jpg','500元红包券',3500,'出借60000.00元及以上,期限170天及以上',9854);
INSERT INTO `ck_label` VALUES(13,150000,25,'img/555_s.jpg','555元红包券',2500,'出借150000.00元及以上,期限25天及以上',10000);
INSERT INTO `ck_label` VALUES(14,200000,25,'img/740_s.jpg','740元红包券',3000,'出借200000.00元及以上,期限25天及以上',1658);
INSERT INTO `ck_label` VALUES(15,100000,80,'img/580_s.jpg','580元红包券',2000,'出借100000.00元及以上,期限80天及以上',3400);
INSERT INTO `ck_label` VALUES(16,150000,80,'img/765_s.jpg','765元红包券',2000,'出借150000.00元及以上,期限80天及以上',10000);
INSERT INTO `ck_label` VALUES(17,200000,80,'img/1020_s.jpg','1020元红包',2500,'出借200000.00元及以上,期限80天及以上',1040);
INSERT INTO `ck_label` VALUES(18,150000,170,'img/1200_s.jpg','1200元红包',3000,'出借150000.00元及以上,期限170天及以上',10000);
INSERT INTO `ck_label` VALUES(19,200000,170,'img/1600_s.jpg','1600元红包',4500,'出借200000.00元及以上,期限170天及以上',10000);
INSERT INTO `ck_label` VALUES(20,100000,360,'img/168_s.jpg','168元红包券',4500,'出借100000.00元及以上,期限170天及以上',1400);
INSERT INTO `ck_label` VALUES(21,80000,360,'img/1588_s.jpg','1588元红包',4000,'出借80000.00元及以上,期限170天及以上',10000);
INSERT INTO `ck_label` VALUES(22,30000,25,'img/100_s.jpg','100元红包券',6000,'出借30000.00元及以上,期限170天及以上',5670);
INSERT INTO `ck_label` VALUES(23,20000,170,'img/158_s.jpg','158元红包券',4500,'出借20000.00元及以上,期限170天及以上',10000);
INSERT INTO `ck_label` VALUES(24,100000,800,'img/800_s.jpg','800元红包券',4500,'出借100000.00元及以上,期限170天及以上',5000);

DROP TABLE IF EXISTS `ck_project`;
CREATE TABLE `ck_project` (
  `pid` int(11) NOT NULL auto_increment,
  `fid` int(8) ,
  `pname` varchar(128) ,
  `active` varchar(8) ,
  `amethod` varchar(128) ,
  `rmethod` varchar(128) ,
  `itla` int(11) ,
  `rat` DECIMAL(5,2) ,
  `rcpt` varchar(128) ,
  `pday` int(11) ,
   `pcnt` int(11) ,
   `ncnt`  int(11) ,
  PRIMARY KEY  (`pid`)
);
INSERT INTO `ck_project` VALUES('1','1','新手专享5936期','','','到期还本付息','100','9.50','+4% 收益','90','10000','2400');
INSERT INTO `ck_project` VALUES('2','1','新手专享5935期','','','到期还本付息','100','8.00','+5% 收益','30','10000','0');
INSERT INTO `ck_project` VALUES('3','2','房屋租赁金融13484期','促','会员尊享1.7%加息礼','到期还本付息','500','9.50','','90','10000','9700');
INSERT INTO `ck_project` VALUES('4','2','房屋租赁金融13735期','促','会员尊享1.7%加息礼','到期还本付息','200','8.00','','30','10000','4800');
INSERT INTO `ck_project` VALUES('5','2','房屋租赁金融13154期','促','7月周六加息狂欢','到期还本付息','100','11.00','+1.7% 收益','360','10000','100');
INSERT INTO `ck_project` VALUES('6','2','房屋租赁金融13066期','促','7月周六加息狂欢','到期还本付息','500','10.50','+1.3% 收益','180','10000','0');
INSERT INTO `ck_project` VALUES('7','2','房屋租赁金融13643期','促','会员尊享1.7%加息礼','到期还本付息','500','10.50','','180','10000','8500');
INSERT INTO `ck_project` VALUES('8','2','房屋租赁金融13574期','促','7月周六加息狂欢','到期还本付息','500','9.50','+1% 收益','90','10000','400');

DROP TABLE IF EXISTS `ck_creditor`;
CREATE TABLE `ck_creditor` (
  `cid` int(11) NOT NULL auto_increment,
  `cname` varchar(128) ,
  `crat` DECIMAL(5,2) ,
  `cday` int(11) ,
   `cmoney` DECIMAL(12,2) ,
   `rcnt` int(11) ,
   `ncnt`  int(11) ,
  PRIMARY KEY  (`cid`)
);
INSERT INTO `ck_creditor` VALUES('1','供应链金融19772期','15.80','331','23697.47','','');
INSERT INTO `ck_creditor` VALUES('2','房屋租赁金融12684期','15.79','330','30394.51','','');
INSERT INTO `ck_creditor` VALUES('3','供应链金融19770期','15.79','330','26949.81','','');
INSERT INTO `ck_creditor` VALUES('4','供应链金融19769期','15.79','330','20263.01','','');
INSERT INTO `ck_creditor` VALUES('5','供应链金融19811期','15.79','329','17636.45','','');
INSERT INTO `ck_creditor` VALUES('6','房屋租赁金融12687期','15.79','330','10131.5','','');
INSERT INTO `ck_creditor` VALUES('7','供应链金融19770期','15.79','330','7294.69','','');
INSERT INTO `ck_creditor` VALUES('8','房屋租赁金融10518期','15.68','288','15891.51','','');
INSERT INTO `ck_creditor` VALUES('9','房屋租赁金融10513期','15.67','286','116706.78','','');
INSERT INTO `ck_creditor` VALUES('10','房屋租赁金融10511期','15.67','286','30984.09','','');
INSERT INTO `ck_creditor` VALUES('11','供应链金融18198期','15.67','287','30970.79','','');
INSERT INTO `ck_creditor` VALUES('12','供应链金融18068期','15.67','287','27047.83','','');
INSERT INTO `ck_creditor` VALUES('13','供应链金融17967期','15.67','286','25820.08','','');
INSERT INTO `ck_creditor` VALUES('14','房屋租赁金融10518期','15.67','286','20656.06','','');
INSERT INTO `ck_creditor` VALUES('15','房屋租赁金融10493期','15.67','286','20656.06','','');
INSERT INTO `ck_creditor` VALUES('16','供应链金融18067期','15.67','286','20656.06','','');
INSERT INTO `ck_creditor` VALUES('17','房屋租赁金融10492期','15.67','287','20647.2','','');
INSERT INTO `ck_creditor` VALUES('18','房屋租赁金融10494期','15.67','287','20647.2','','');
INSERT INTO `ck_creditor` VALUES('19','房屋租赁金融10496期','15.67','287','15588.64','','');
INSERT INTO `ck_creditor` VALUES('20','供应链金融18067期','15.67','286','10328.03','','');
INSERT INTO `ck_creditor` VALUES('21','供应链金融17964期','15.67','286','10328.03','','');
INSERT INTO `ck_creditor` VALUES('22','供应链金融17969期','15.67','286','10328.03','','');
INSERT INTO `ck_creditor` VALUES('23','供应链金融18199期','15.67','287','10323.59','','');
INSERT INTO `ck_creditor` VALUES('24','房屋租赁金融10492期','15.67','287','10323.59','','');
INSERT INTO `ck_creditor` VALUES('25','房屋租赁金融10513期','15.67','286','8262.43','','');
INSERT INTO `ck_creditor` VALUES('26','房屋租赁金融10194期','15.67','286','5164.02','','');
INSERT INTO `ck_creditor` VALUES('27','供应链金融17965期','15.67','286','5164.02','','');
INSERT INTO `ck_creditor` VALUES('28','供应链金融17938期','15.67','286','5164.02','','');
INSERT INTO `ck_creditor` VALUES('29','供应链金融17966期','15.66','285','51662.33','','');
INSERT INTO `ck_creditor` VALUES('30','供应链金融17968期','15.66','285','51662.33','','');
INSERT INTO `ck_creditor` VALUES('31','房屋租赁金融10512期','15.66','285','30997.39','','');
INSERT INTO `ck_creditor` VALUES('32','房屋租赁金融10190期','15.66','285','30997.39','','');
INSERT INTO `ck_creditor` VALUES('34','供应链金融17938期','15.66','285','25831.17','','');
INSERT INTO `ck_creditor` VALUES('35','房屋租赁金融10193期','15.66','285','20664.93','','');
INSERT INTO `ck_creditor` VALUES('36','供应链金融17968期','15.66','285','20664.93','','');
INSERT INTO `ck_creditor` VALUES('37','供应链金融17963期','15.66','285','20664.93','','');
INSERT INTO `ck_creditor` VALUES('38','供应链金融17965期','15.66','285','15498.71','','');
INSERT INTO `ck_creditor` VALUES('39','房屋租赁金融10192期','15.66','285','13432.21','','');
INSERT INTO `ck_creditor` VALUES('41','供应链金融18198期','15.66','285','13432.21','','');
INSERT INTO `ck_creditor` VALUES('42','房屋租赁金融10515期','15.66','285','10642.44','','');
INSERT INTO `ck_creditor` VALUES('43','供应链金融17968期','15.66','285','10332.46','','');
INSERT INTO `ck_creditor` VALUES('44','房屋租赁金融10188期','15.66','285','10332.46','','');
INSERT INTO `ck_creditor` VALUES('45','房屋租赁金融10515期','15.66','285','10332.46','','');
INSERT INTO `ck_creditor` VALUES('46','房屋租赁金融10188期','15.66','285','10332.46','','');
INSERT INTO `ck_creditor` VALUES('47','供应链金融18068期','15.66','285','5166.24','','');
INSERT INTO `ck_creditor` VALUES('48','房屋租赁金融10190期','15.66','283','62047.99','','');
INSERT INTO `ck_creditor` VALUES('49','供应链金融17937期','15.66','284','51684.5','','');
INSERT INTO `ck_creditor` VALUES('50','供应链金融18068期','15.66','285','51684.5','','');
INSERT INTO `ck_creditor` VALUES('51','房屋租赁金融10193期','15.66','285','20682.66','','');
INSERT INTO `ck_creditor` VALUES('52','供应链金融18096期','14.98','101','103350.46','','');
INSERT INTO `ck_creditor` VALUES('53','房屋租赁金融10702期','14.98','102','51654.03','','');
INSERT INTO `ck_creditor` VALUES('54','供应链金融18087期','14.98','101','31005.14','','');
INSERT INTO `ck_creditor` VALUES('55','房屋租赁金融10700期','14.98','101','31005.14','','');
INSERT INTO `ck_creditor` VALUES('56','供应链金融18090期','14.98','101','31005.14','','');

DROP TABLE IF EXISTS `ck_msgOrg`;
CREATE TABLE `ck_msgOrg` (
  `oid` int(11) NOT NULL auto_increment,
  `oname` varchar(128) ,
  `omsg` varchar(512) ,
  PRIMARY KEY  (`oid`)
);
INSERT INTO `ck_msgOrg` VALUES('1','公司全称及简称','杭州客客金融信息服务有限公司(简称：创客金融)');
INSERT INTO `ck_msgOrg` VALUES('2','公司注册地址','浙江省杭州市西湖区西溪新座');
INSERT INTO `ck_msgOrg` VALUES('3','公司经营地址','浙江省杭州市西湖区西溪新座');
INSERT INTO `ck_msgOrg` VALUES('4','统一社会信用代码','913301063229155103');
INSERT INTO `ck_msgOrg` VALUES('5','成立时间','2014-10-30');
INSERT INTO `ck_msgOrg` VALUES('6','经营期限','2014-10-30至2044-10-29');
INSERT INTO `ck_msgOrg` VALUES('7','经营状态','开业');
INSERT INTO `ck_msgOrg` VALUES('8','注册资本/实缴注册资本','12000万人民币/6600万人民币');
INSERT INTO `ck_msgOrg` VALUES('9','法定代表人/实际控制人','周洋');
INSERT INTO `ck_msgOrg` VALUES('10','董事 / 监事 / 高管','CEO：周洋 监事：田乔波');
INSERT INTO `ck_msgOrg` VALUES('11','经营范围','服务：接受金融机构委托从事金融业务流程外包，接受金融机构委托从事金融信息技术外包，以服务外包方式从事票据中介服务（不含承兑等银行核心业务），金融软件技术的技术开发、技术服务、技术咨询、成果转让，经济信息咨询（除商品中介），企业管理咨询，企业形象策划，财务咨询，投资管理，投资咨询（以上项目除证券、期货，未经金融等监管部门批准，不得从事向公众融资存款、融资担保、代客理财等金融服务），数据处理，金融信息服务，计算机软硬件、动漫产品、网络信息技术的技术开发、技术咨询、技术服务、成果转让，计算机系统集成，电子商务技术的技术开发；批发、零售：计算机软硬件；其他无需报经审批的一切合法项目。（依法须经批准的项目，经相关部门批准后方可开展经营活动）');
INSERT INTO `ck_msgOrg` VALUES('12','存管信息','资金存管：江西银行股份有限公司<br>签约时间：2016-9-27<br>上线时间：2016-10-28');
INSERT INTO `ck_msgOrg` VALUES('13','平台域名','<a href="https://www.chuangke18.com">https://www.chuangke18.com</a>');
INSERT INTO `ck_msgOrg` VALUES('14','平台上线运营时间','2015-9-9');
INSERT INTO `ck_msgOrg` VALUES('15','平台名称','官方手机应用：创客金融');
INSERT INTO `ck_msgOrg` VALUES('16','平台注册协议','<p>《用户服务协议》</p><div class="bg_model"><div></div></div>');
INSERT INTO `ck_msgOrg` VALUES('17','平台收费标准','<p>《收费标准》</p><div class="bg_model"><div></div></div>');
INSERT INTO `ck_msgOrg` VALUES('18','其他官互联网渠道信息','微信服务号：创客金融客服中心   微信订阅号：创客与你说   微博：@创客金融');
INSERT INTO `ck_msgOrg` VALUES('19','电信业务经营许可证号','浙B2-20160487');
INSERT INTO `ck_msgOrg` VALUES('20','公安机关出具的网站备案编号','<img src="img/gab.png" alt="">');
INSERT INTO `ck_msgOrg` VALUES('21','ICP经营许可证编号','ICP备15021958号');



























