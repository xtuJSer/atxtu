<template>
  <section class="about">
    <header>
      <h1>关于</h1>
      <p>“看到这个页面的又是你们这些长得好看的”</p>
      <!--<p>号外：词条征集活动正在进行中，详情如下</p>-->
    </header>
    <figure>
      <img src="../public/images/logo.png" alt="LOGO" width="100px">

      <figcaption>
        <div class="weibo">
          <a href="http://weibo.com/magicalWei/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">@_MagicalLu</a>
          <!--<span>会写代码的男孩运气不会太差</span>-->
        </div>

        <div class="section">
          <h3>关于词条</h3>
          <div class="content">
            <p>如果那些随机出现的词条成功的引起了你的注意，是否也想把你的只言片语贴在这学校的一角呢？欢迎投稿（<a href="http://weibo.com/magicalWei/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">微博私信</a>）要求如下：</p>
            <br>
            <ul>
              <li>1、不轻易开车 Σ（ﾟдﾟlll）</li>
              <li>2、不打广告 Σ（ﾟдﾟlll）</li>
              <li>3、可表白 (/ω＼)（把这个网站推荐给喜欢的人吧，系统会在你们自习的当天适当增加出现概率</li>
              <li>4、积极向上，正能量</li>
              <li>5、符合社会主义核心价值观 ╮(￣▽￣"")╭</li>
            </ul>
            <br>
            <p>ps：似乎有些机型不能跳转至微博页，手动搜一下我的微博名吧，给您带来不便深表歉意。</p>
          </div>
        </div>

        <div class="section">
          <h3>关于网站</h3>
          <div class="content">
            <p>感谢体验！起初只是想做一个小项目供身边好友一个方便，没想到被女票还有朋友推广出去了。看着每日访问量逐日倍增深感压力。感谢这段时间各位的吐槽、意见以及支持，在你们的鞭策下，这个平台会越来越好，为你们提供更多的便利和趣味。再次感谢。</p>
          </div>
        </div>

        <div class="section">
          <h3>关于数据可靠性</h3>
          <div class="content">
            <p>数据来源于教务系统，若与实际情况不符，嗯.. 我也很无奈。只能把希望寄托于学校能继续完善数据了。</p>
            <p>更新时间是在每天凌晨0:01:23，若在此之前无法查看第二天的教室情况，请静候。若过了这个时间点，依然不显示，请轻拍我（<a href="http://weibo.com/magicalWei/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">微博私信</a>）</p>
          </div>
        </div>

      </figcaption>
    </figure>
  </section>
</template>

<style lang="stylus">
$mobile-width = 768px

.about
  figure
    width: $mobile-width
    text-align: center
    background: #fff
    color: #333
    margin: 90px auto 30px
    border-radius: 2px
    box-shadow: 1px 2px 5px rgba(0,0,0, .1)
    min-height: 50vh
    img
      border-radius: 50%
      margin-top: -60px

  figcaption
    .weibo
      a
        font-weight: bold
      span
        display: block
        font-size: 13px

    .section
      padding: 20px 0
      border-top: 2px dashed #eee
      position: relative
      &:nth-child(2)
        margin-top: 20px
      .content
        text-align: left
        padding: 20px
        line-height: 24px
        text-indent: 2rem
        font-size: 14px
        font-weight: 400
        letter-spacing: .075rem
        a
          text-decoration: underline

</style>
