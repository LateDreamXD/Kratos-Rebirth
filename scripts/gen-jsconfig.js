// 生成运行时调用的配置专用JS文件

hexo.once("generateBefore", () => {
  const themeConfig = hexo.theme.config;

  hexo.extend.generator.register("file-jsconfig", () => ({
    path: "config.json",
    data: JSON.stringify({
      uptime: {
        since: themeConfig.footer.components.uptime.since,
      },
      inactiveNotice: {
        enable: themeConfig.inactive_notice.enable,
        leaveLogo: themeConfig.inactive_notice.favicon.leave,
        leaveTitle: themeConfig.inactive_notice.message.leave,
        returnTitle: themeConfig.inactive_notice.message.return,
      },
      copyrightNoticeForCopy: {
        enable: themeConfig.copyright_notice.append_copy.enable,
        template: themeConfig.copyright_notice.append_copy.template,
        threshold: themeConfig.copyright_notice.append_copy.threshold,
      },
      topNavScrollToggle: {
        enable: themeConfig.nav.auto_hide,
      },
      expireNotify: {
        expireAfter: themeConfig.posts.expire_after,
      },
      viewerjs: {
        enable: themeConfig.viewerjs,
      },
    }),
  }));
});
