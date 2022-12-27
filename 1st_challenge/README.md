<p>Source: <a href="https://adventjs.dev/challenges/2022/1">https://adventjs.dev/challenges/2022/1</a></p>

<div>
<p>The elves bought a gift-wrapping machine this year. But it's not programmed! <strong>We need to create an algorithm that helps it in the task.</strong></p>
<p>The machine receives an array of gifts. Each gift is a <code>string</code>. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.</p>
<p>The wrapping paper is the <code>*</code> symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> gifts <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'cat'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'game'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'socks'</span>]
<span class="shj-syn-kwd">const</span> wrapped <span class="shj-syn-oper">=</span> <span class="shj-syn-func">wrapping</span>(gifts)

console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(wrapped)
<p class="shj-syn-cmnt">/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
</p>
</code></pre>
<p>As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.</p>
<p><strong>Note:</strong> The <code>\n</code> represents a line break.</p>
<p><strong>Watch out!</strong> Make sure you put the right number of <code>*</code> symbols to wrap completely the string. But not too many! Just enough to cover the string.</p>
<p>Ah, <strong>and do not mutate the original array!</strong></p>
</div>