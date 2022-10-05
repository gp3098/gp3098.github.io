import{e}from"./app.c8cb794d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=e(`<h1 id="\u5B66\u4E60ssh\u76F8\u5173\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60ssh\u76F8\u5173\u77E5\u8BC6" aria-hidden="true">#</a> \u5B66\u4E60ssh\u76F8\u5173\u77E5\u8BC6</h1><blockquote><p><strong>remote_ssh_server</strong>\u662F\u672C\u5730\u5728~/.ssh/config\u5185\u914D\u7F6E\u7684\u4E3B\u673A\u540D</p></blockquote><h2 id="\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1" aria-hidden="true">#</a> \u672C\u5730\u7AEF\u53E3\u8F6C\u53D1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh -L 2111:www.google.com:80 remote_ssh_server -N
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl http://localhost:2111
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8BBF\u95EE\u672C\u5730\u76842111\u7AEF\u53E3\u76F8\u5F53\u4E8E\u8BBF\u95EE\u4E86www.google.com\u8FDB\u884C\u4E86\u7AEF\u53E3\u8F6C\u53D1\u8D70\u7684http</p><blockquote><p>\u53C2\u8003 https://wangdoc.com/ssh/port-forwarding.html</p></blockquote><h3 id="\u589E\u52A0config\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0config\u914D\u7F6E" aria-hidden="true">#</a> \u589E\u52A0config\u914D\u7F6E</h3><p>\u6CA1\u6709\u5B9E\u8DF5\uFF0C\u61D2\u5F97\u81EA\u5DF1\u914D\u7F6E\u4E86\uFF0C\u642C\u8FD0\u4E00\u4E0B\u5427</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Host test.example.com
LocalForward client-IP:client-port server-IP:server-port
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u52A8\u6001\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8F6C\u53D1" aria-hidden="true">#</a> \u52A8\u6001\u8F6C\u53D1</h2><h3 id="\u65B9\u6CD51-\u76F4\u63A5\u901A\u8FC7\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD51-\u76F4\u63A5\u901A\u8FC7\u547D\u4EE4" aria-hidden="true">#</a> \u65B9\u6CD51 \u76F4\u63A5\u901A\u8FC7\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh  -D 22333 remote_ssh_server -N
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -x socks5://localhost:22333 cip.cc
# -x \u4EE3\u8868\u4F7F\u7528\u4EE3\u7406
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u672C\u5730\u589E\u52A0socks5\u4EE3\u7406\u540E\u8BBF\u95EE\u7684\u6240\u6709\u7F51\u7AD9\u6216\u8005\u5176\u4ED6\u6D41\u91CF\u90FD\u4F1A\u8F6C\u6362\u6210remote_ssh_server\u65B9\u5F0F\u8BBF\u95EE</p><h3 id="\u65B9\u6CD52-\u589E\u52A0config\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD52-\u589E\u52A0config\u914D\u7F6E" aria-hidden="true">#</a> \u65B9\u6CD52 \u589E\u52A0config\u914D\u7F6E</h3><p>\u5728\u53C2\u8003\u6587\u6863\u5185\u6CA1\u6709\u8BE6\u7EC6\u7684\u914D\u7F6E\uFF0C\u91CD\u65B0\u53C2\u8003\u4E86\u5176\u4ED6\u535A\u4E3B\u7684\u6587\u7AE0\u624D\u660E\u767D\u662F\u600E\u4E48\u64CD\u4F5C\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Host &quot;remote_ssh_server&quot;
    HostName xxx.xxx.xx.xx
    Port  22
    User ubuntu
    IdentityFile ~/.ssh/id_rsa
    DynamicForward localhost:22333
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1" aria-hidden="true">#</a> \u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1</h2>`,19);function r(t,c){return n}var d=s(a,[["render",r]]);export{d as default};
