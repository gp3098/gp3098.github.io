import{e}from"./app.96ef2931.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h1 id="\u641E\u4E86\u4E00\u4E2A\u7532\u9AA8\u6587oracle-cloud-\u7684vps" tabindex="-1"><a class="header-anchor" href="#\u641E\u4E86\u4E00\u4E2A\u7532\u9AA8\u6587oracle-cloud-\u7684vps" aria-hidden="true">#</a> \u641E\u4E86\u4E00\u4E2A\u7532\u9AA8\u6587Oracle Cloud \u7684vps</h1><p>\u633A\u597D\u7684\uFF0C\u6C38\u4E45\u514D\u8D39<br> \u95EE\u9898\u4E5F\u6709\uFF0C\u5C31\u662F\u8BBE\u7F6E\u4E86\u5B89\u5168\u7EC4\u4E00\u76F4\u8FD8\u662F\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u540E\u6765\u7EC8\u4E8E\u5728\u7F51\u4E0A\u627E\u5230\u4E86\u6559\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7ECF\u8FC7\u4E0A\u8FF0\u8BBE\u7F6E\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\uFF0C\u771F\u662F\u592A\u68D2\u4E86\u3002 \u6D4B\u8BD5\u662F\u901A\u8FC7nc\u547D\u4EE4\u8FD8\u5B9E\u73B0\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F00\u542F\u4E00\u4E2A\u76D1\u542C3333\u7AEF\u53E3\u7684\u670D\u52A1
//\u5728orcale\u7684vps\u4E0A\u6267\u884C
nc -l 0.0.0.0 3333  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5728\u672C\u673A\u4E0A\u6267\u884C\uFF0C\u5982\u679C\u80FD\u591F\u901A\u5E76\u4E14\u4FDD\u6301\u957F\u94FE\u63A5\u5C31\u8868\u793A\u5DF2\u7ECF\u7AEF\u53E3\u5F00\u653E\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5566
nc x.x.x.x 3333 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6);function l(r,c){return a}var p=s(n,[["render",l]]);export{p as default};
