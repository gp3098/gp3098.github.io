import{e as n}from"./app.c8cb794d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u6784\u9020\u8005\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u6784\u9020\u8005\u51FD\u6570" aria-hidden="true">#</a> \u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u6784\u9020\u8005\u51FD\u6570</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Robot</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> wheel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> homingSensor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setWheel</span><span class="token punctuation">(</span>wheel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>wheel <span class="token operator">=</span> wheel<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHomingSensor</span><span class="token punctuation">(</span>homingSensor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>homingSensor <span class="token operator">=</span> homingSensor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DeviceBuilder</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> robot<span class="token operator">:</span> Robot<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>robot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Robot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>robot<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">abstract</span> <span class="token function">buildWheel</span><span class="token punctuation">(</span>wheel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">buildHomingSensor</span><span class="token punctuation">(</span>homingSensor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Robot<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SortBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">DeviceBuilder</span> <span class="token punctuation">{</span>
  <span class="token function">buildWheel</span><span class="token punctuation">(</span>wheel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>robot<span class="token punctuation">.</span><span class="token function">setWheel</span><span class="token punctuation">(</span>wheel<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">buildHomingSensor</span><span class="token punctuation">(</span>homingSensor<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>robot<span class="token punctuation">.</span><span class="token function">setHomingSensor</span><span class="token punctuation">(</span>homingSensor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Robot <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>robot<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> builder<span class="token operator">:</span> DeviceBuilder<span class="token punctuation">;</span>
  <span class="token function">setBuilder</span><span class="token punctuation">(</span>builder<span class="token operator">:</span> DeviceBuilder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">buildWheel</span><span class="token punctuation">(</span><span class="token string">&#39;sort-wheel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">buildHomingSensor</span><span class="token punctuation">(</span><span class="token string">&#39;sort-homing-sensor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sortBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SortBuilder</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

director<span class="token punctuation">.</span><span class="token function">setBuilder</span><span class="token punctuation">(</span>sortBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sorter <span class="token operator">=</span> director<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sorter product: &#39;</span><span class="token punctuation">,</span> sorter<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>`,2);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
