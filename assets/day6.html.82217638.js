import{e as n}from"./app.96ef2931.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u62BD\u8C61\u5DE5\u5382\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u62BD\u8C61\u5DE5\u5382\u51FD\u6570" aria-hidden="true">#</a> \u4ECA\u5929\u4E00\u8D77\u63A2\u8BA8\u62BD\u8C61\u5DE5\u5382\u51FD\u6570</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u62BD\u8C61\u5DE5\u5382Typescript \u5B9E\u73B0
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Dialog</span> <span class="token punctuation">{</span>
  <span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Checkbox</span> <span class="token punctuation">{</span>
  <span class="token function">checklist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
  <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> <span class="token function">createDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Dialog<span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">createCheckbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Checkbox<span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
  <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;show windows button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinCheckBox</span> <span class="token keyword">implements</span> <span class="token class-name">Checkbox</span> <span class="token punctuation">{</span>
  <span class="token function">checklist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;show windows checkbox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WinDialog</span> <span class="token keyword">implements</span> <span class="token class-name">Dialog</span> <span class="token punctuation">{</span>
  <span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;show windows dialog&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Win_UIFactory</span> <span class="token keyword">extends</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createCheckbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Checkbox <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinCheckBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Dialog <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WinDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinuxButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
  <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;linux button clicked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinuxCheckbox</span> <span class="token keyword">implements</span> <span class="token class-name">Checkbox</span> <span class="token punctuation">{</span>
  <span class="token function">checklist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;show linux checkbox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">LinuxDialog</span> <span class="token keyword">implements</span> <span class="token class-name">Dialog</span> <span class="token punctuation">{</span>
  <span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;show linux dialog&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Linux_UIFactory</span> <span class="token keyword">extends</span> <span class="token class-name">UIFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Button <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LinuxButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createCheckbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Checkbox <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LinuxCheckbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">createDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Dialog <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">LinuxDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">UI</span></span> <span class="token punctuation">{</span>
  button<span class="token operator">:</span> Button<span class="token punctuation">;</span>
  dialog<span class="token operator">:</span> Dialog<span class="token punctuation">;</span>
  checkbox<span class="token operator">:</span> Checkbox<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">app</span><span class="token punctuation">(</span>ui<span class="token operator">:</span> <span class="token constant">UI</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ui<span class="token punctuation">.</span>button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ui<span class="token punctuation">.</span>dialog<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ui<span class="token punctuation">.</span>checkbox<span class="token punctuation">.</span><span class="token function">checklist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mainApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> winUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Win_UIFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> button_win<span class="token operator">:</span> Button <span class="token operator">=</span> winUI<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dialog_win<span class="token operator">:</span> Dialog <span class="token operator">=</span> winUI<span class="token punctuation">.</span><span class="token function">createDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> checkbox_win<span class="token operator">:</span> Checkbox <span class="token operator">=</span> winUI<span class="token punctuation">.</span><span class="token function">createCheckbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">{</span> button<span class="token operator">:</span> button_win<span class="token punctuation">,</span> dialog<span class="token operator">:</span> dialog_win<span class="token punctuation">,</span> checkbox<span class="token operator">:</span> checkbox_win <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> linuxUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Linux_UIFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> button_linux<span class="token operator">:</span> Button <span class="token operator">=</span> linuxUI<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> checkbox_linux<span class="token operator">:</span> Checkbox <span class="token operator">=</span> linuxUI<span class="token punctuation">.</span><span class="token function">createCheckbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> dialog_linux<span class="token operator">:</span> Dialog <span class="token operator">=</span> linuxUI<span class="token punctuation">.</span><span class="token function">createDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">{</span> button<span class="token operator">:</span> button_linux<span class="token punctuation">,</span> dialog<span class="token operator">:</span> dialog_linux<span class="token punctuation">,</span> checkbox<span class="token operator">:</span> checkbox_linux <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">mainApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div>`,2);function t(c,o){return p}var u=s(a,[["render",t]]);export{u as default};
