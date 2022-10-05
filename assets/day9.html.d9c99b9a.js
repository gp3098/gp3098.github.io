import{e as s}from"./app.c8cb794d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="\u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u88C5\u9970\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u88C5\u9970\u6A21\u5F0F" aria-hidden="true">#</a> \u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u88C5\u9970\u6A21\u5F0F</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u88C5\u9970\u6A21\u5F0F
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Feedback</span> <span class="token punctuation">{</span>
  <span class="token function">backMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WcsServer</span> <span class="token keyword">implements</span> <span class="token class-name">Feedback</span> <span class="token punctuation">{</span>
  <span class="token function">backMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">WcsServerDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">Feedback</span> <span class="token punctuation">{</span>
  feedback<span class="token operator">:</span> Feedback<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>feedback<span class="token operator">:</span> Feedback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>feedback <span class="token operator">=</span> feedback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">abstract</span> <span class="token function">backMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SonyWcsServerDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">WcsServerDecorator</span> <span class="token punctuation">{</span>
  <span class="token function">backMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> message <span class="token operator">+</span> <span class="token string">&#39; :sony&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> wcsServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WcsServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> wcsServerSony <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SonyWcsServerDecorator</span><span class="token punctuation">(</span>wcsServer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res1 <span class="token operator">=</span> wcsServer<span class="token punctuation">.</span><span class="token function">backMessage</span><span class="token punctuation">(</span><span class="token string">&#39;same message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res2 <span class="token operator">=</span> wcsServerSony<span class="token punctuation">.</span><span class="token function">backMessage</span><span class="token punctuation">(</span><span class="token string">&#39;same message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before deco&#39;</span><span class="token punctuation">,</span> res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;after deco&#39;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,2);function e(t,c){return p}var r=n(a,[["render",e]]);export{r as default};
