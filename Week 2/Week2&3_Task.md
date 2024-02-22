# Week 2&3 Tasks
```html
<!-- From 15:18 -->
<!-- التكليف 01
تأكد أن الجدول يملأ الشاشة كاملة
يمكنك كتابة أي أسماء وبيانات تريدها
حجم الصورة يجب أن يكون 40×40
يمكنك وضع اي رابط تريده لا توجد مشكلة ولكن أهم شيء أن يفتح الرابط في صفحة جديدة
يجب إستعمال عناصر ال HTML فقط لعمل المطلوب
يجب أن يكون الإسم الأول على سطر والثاني على سطر تحته
الشخص الأول لديه أكثر من Email يجب وضع خط فاصل بينهم
قم بإضافة Caption للجدول يحتوي على جملة Members Data
يجب عليك عمل المطلوب كاملا مثل الصورة التالية -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<table width="100%" border="1" cellpadding="1">
			<caption>
				Members Data
			</caption>
			<thead>
				<tr>
					<th>Group</th>
					<th>Avatar</th>
					<th>Name</th>
					<th>Email</th>
					<th>Character</th>
					<th>Profile</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td rowspan="2">Ninja</td>
					<td>
						<img
							decoding="async"
							src="https://via.placeholder.com/40/F00"
							alt=""
						/>
					</td>
					<td>
						Osama <br />
						Mohamed
					</td>
					<td>
						o1@nn.sa
						<hr />
						o2@nn.sa
					</td>
					<td>&copy;</td>
					<td><a href="https://elzero.org" target="_blank">Profile</a></td>
				</tr>
				<tr>
					<td>
						<img
							decoding="async"
							src="https://via.placeholder.com/40/00F"
							alt=""
						/>
					</td>
					<td>
						Shady <br />
						Nabil
					</td>
					<td>s@nn.sa</td>
					<td>&trade;</td>
					<td><a href="https://elzero.org" target="_blank">Profile</a></td>
				</tr>
				<tr>
					<td>Monsters</td>
					<td>
						<img
							decoding="async"
							src="https://via.placeholder.com/40/000"
							alt=""
						/>
					</td>
					<td>
						Mohamed <br />
						Ibrahim
					</td>
					<td>m@nn.sa</td>
					<td>&reg;</td>
					<td><a href="https://elzero.org" target="_blank">Profile</a></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="5">Total</td>
					<td>3</td>
				</tr>
			</tfoot>
		</table>
	</body>
</html>

<!-- التكليف 02 -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<table border="1" cellpadding="12px" cellspacing="0.5px">
			<caption>
				Table Caption
			</caption>
			<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Points</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td rowspan="4">Month</td>
					<td>Osama Mohamed</td>
					<td>100</td>
				</tr>
				<tr>
					<td>Sayed Mohamed</td>
					<td>100</td>
				</tr>
				<tr>
					<td>Ahmed Mohamed</td>
					<td>100</td>
				</tr>
				<tr>
					<td>Eman Mohamed</td>
					<td>100</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>

<!-- التكليف 03 -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<table border="1" cellpadding="12px">
			<caption>
				Complex Table
			</caption>
			<thead>
				<tr>
					<th>Year</th>
					<th>Group</th>
					<th>Language</th>
					<th>Done</th>
					<th>Passed</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td rowspan="5">2022</td>
					<td rowspan="2">Elzero</td>
					<td>HTML</td>
					<td colspan="2">Yes</td>
				</tr>
				<tr>
					<td>CSS</td>
					<td colspan="2">Yes</td>
				</tr>
				<tr>
					<td rowspan="3">Heroes</td>
					<td>JS</td>
					<td>Yes</td>
					<td>No</td>
				</tr>
				<tr>
					<td>PHP</td>
					<td colspan="2">Yes</td>
				</tr>
				<tr>
					<td>Python</td>
					<td>No</td>
					<td>No</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>

<!-- From 19:23 -->
<!-- التكليف 01
ما هي العناصر الموجودة في اللغة من العناصر التالية
Header ==> Yes
Nav ==> Yes
Main ==> Yes
Aside ==> Yes
Picture ==> Yes
Figure ==> Yes
Footer ==> Yes
FigCaption ==> Yes
Section ==> Yes
Command ==> No
Ruby ==> Yes
Data ==> Yes
Article ==> Yes
Install ==> No
Text ==> No
-->

<!-- التكليف 02
قم بإنشاء صفحة كاملة جديدة
تأكد أنك تستخدم ال Semantic Elements في جميع الطلبات التالية
قم بإنشاء Header يحتوي على عنوان الصفحة والروابط الخاصة بالصفحة
يمكنك وضع خمس روابط بأي أسماء
تحتها قم بعمل Navigation Bar يحتوي على مجموعة روابط على الأقل 6 روابط بأي أسماء
قم بعمل عنصر يحتوي على محتوى الصفحة وبجانبه عنصر يحتوي على محتوى ال Sidebar
داخل محتوى الصفحة قم بعمل ثلاثة مقالات كل مقال بينه وبين الآخر خط عرضي
في كل مقال قم بوضع عنوان للمقال وتحته فقرة نصية فيها جزء من محتوى المقال
تحتها صورة للمقال ثم تحتها رابط فيه كلمة إقرأ المزيد
في أسفل الصفحة قم بإنشاء عنصر لل Footer وداخله جملة Copyright 2021 ©
وتأكد أنك تستخدم ال Entity السليمة لل Character
داخل عنصر ال Sidebar قم بوضع عنوان بإسم Categories
تحت العنوان إستخدم Unordered List لوضع خمس أقسام بأي اسماء تريد -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<header>
			<h2>Page Name</h2>
			<li><a href="https::/Google.com">Home</a></li>
			<li><a href="https::/Google.com">About</a></li>
			<li><a href="https::/Google.com">Services</a></li>
			<li><a href="https::/Google.com">Profile</a></li>
			<li><a href="https::/Google.com">Contact</a></li>
		</header>
		<hr />
		<nav>
			<li>HTML</li>
			<li>CSS</li>
			<li>TailWind</li>
			<li>Bootstrap</li>
			<li>JavaScript</li>
			<li>React</li>
		</nav>
		<hr />
		<section>
			<article>
				<h2>Article One</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					facere similique vitae, cum error, facilis esse ipsam dolores et eum
					velit magnam in asperiores dicta quam. Nobis repudiandae odit quos?
				</p>
				<img
					src="Aesthetic-Star-Laptop-Wallpaper-Space-Wallpaper-Tumblr-.jpg"
					width="600"
					height="400"
				/>
				<br />
				<a href="">Read more</a>
			</article>
			<hr />
			<article>
				<h2>Article Two</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					facere similique vitae, cum error, facilis esse ipsam dolores et eum
					velit magnam in asperiores dicta quam. Nobis repudiandae odit quos?
				</p>
				<img
					src="Aesthetic-Star-Laptop-Wallpaper-Space-Wallpaper-Tumblr-.jpg"
					width="600"
					height="400"
				/>
				<br />
				<a href="">Read more</a>
			</article>
			<hr />
			<article>
				<h2>Article Three</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
					facere similique vitae, cum error, facilis esse ipsam dolores et eum
					velit magnam in asperiores dicta quam. Nobis repudiandae odit quos?
				</p>
				<img
					src="Aesthetic-Star-Laptop-Wallpaper-Space-Wallpaper-Tumblr-.jpg"
					width="600"
					height="400"
				/>
				<br />
				<a href="">Read more</a>
			</article>
		</section>
		<aside>
			<h2>Categories</h2>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>TailWind</li>
				<li>JavaScript</li>
				<li>React</li>
			</ul>
		</aside>
		<hr />
		<footer>&copy; Copyright 2023</footer>
	</body>
</html>

<!-- التكليف 03
قم بإضافة عنصر يحتوي على ملف صوتي بأكثر من إمتداد 3 Extensions
ضع رسالة تظهر في حالة كان المتصفح لا يدعم الملف الصوتي
تأكد ان الملف يعمل تلقائيا عند فتح الصفحة
تأكد أن الملف إذا إنتهي سوف يعمل تلقائيا مرة أخرى -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<audio controls autoplay loop>
			<source src="Ball.mp3" type="audio/mpeg" />
			<source src="Ball.ogg" type="audio/ogg" />
			<source src="Ball.weba" type="audio/webm" />
			Your browser does not support this audio type!
		</audio>
	</body>
</html>

<!-- التكليف 04
قم بإضافة عنصر يحتوي على ملف فيديو بأكثر من إمتداد 3 Extensions
ضع رسالة تظهر في حالة كان المتصفح لا يدعم الملف المرئي
تأكد ان الملف يعمل تلقائيا عند فتح الصفحة
تأكد أن الفيديو لا يوجد به صوت عندما يعمل
ضع في ال Caption لغتين يمكن الشخص أن يختارهم
ضع Poster للفيديو باي صورة تريدها يظهر عند التحميل -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<video
			controls
			autoplay
			loop
			muted
			poster="Aesthetic-Star-Laptop-Wallpaper-Space-Wallpaper-Tumblr-.jpg"
		>
			<source src="L1_S1-en.mp4" type="video/mp4" />
			<source src="L1_S1-en.mpeg" type="video/mpeg" />
			<source src="L1_S1-en.webm" type="video/webm" />
			Your browser does not support this video type!
			<track src="L1_S1-en.vtt" kind="captions" lang="en" label="English" />
			<track src="L1_S1-it.vtt" kind="captions" lang="it" label="Itally" />
		</video>
	</body>
</html>

<!-- From 24:27 -->
<!-- التكليف 01
قم بإنشاء نموذج يحتوي على خمس حقول إدخال
كل حقل يجب أن يحتوي على Label قبله
الحقول هي Username, Password, Mobile, Email, Subject
تأكد من إختيار نوع الحقل المناسب لكل مما سبق
حقل ال Mobile يمكن أن يحتوي على رقم بهذا الشكل +20100 (234) 123
حقل ال Username + Email إجباري كتابته
جميع الحقول يجب أن تحتوي على نص يوجه الشخص لنصائح أثناء ملأ الحقل. يمكنك كتابة ما تريد في النصائح
يجب أن يكون ال Label على سطر وحقل الإدخال على سطر آخر تحته
كل Label + Input يجب وضع hr بعدهم للفصل بينهم وبين ال Label + Input الموجودين بعدهم
البيانات الموجودة في النموذج سوف يتم إرسالها لصفحة اسمها test.py
يجب التأكد ان البيانات التي يتم إرسالها لن تظهر في الرابط العلوي
قم بإلتقاط صورة من ال Query String التي تحتوي على البيانات
يجب عليك وضع حقل مخفي تكون قيمته أي رقم تريده
يجب وضع زر يقوم بحذف جميع ما تم كتابته في حقول الإدخال ويكون إسمه Empty Form
يجب وضع زر لإرسال البيانات يكون إسمه Send Data -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<form action="test.py" method="POST">
			<input type="hidden" value="4" />
			<div>
				<label>Username</label>
				<br />
				<input type="text" required placeholder="Username" name="user" />
			</div>
			<hr />
			<div>
				<label>Password</label>
				<br />
				<input
					type="password"
					placeholder="Enter a complex password"
					name="pass"
				/>
			</div>
			<hr />
			<div>
				<label>Mobile</label>
				<br />
				<input type="text" placeholder="+20100 (234) 123" name="number" />
			</div>
			<hr />
			<div>
				<label>Email</label>
				<br />
				<input
					type="email"
					required
					placeholder="Enter an email"
					name="email"
				/>
			</div>
			<hr />
			<div>
				<label>Subject</label>
				<br />
				<input type="text" placeholder="Any subject you want" name="sub" />
			</div>
			<br />
			<input type="reset" value="Empty Form" />
			<br />
			<br />
			<input type="submit" value="Send Data" />
		</form>
	</body>
</html>

<!-- التكليف 02
قم بعمل الشكل الموجود في الصورة بال HTML فقط
القيمة الإفتراضية هي 400
لا تحتاج لعمل الأرقام هي فقط لتوضيح المطلوب -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<form>
			<input type="range" min="100" max="500" step="50" value="400" />
		</form>
	</body>
</html>

<!-- From 28:30 -->
<!-- التكليف 01
قم بإنشاء نموذج يحتوي على ثلاث حقول إدخال
كل حقل يجب أن يحتوي على Label قبله
الحقول هي Token, Email, Username
تأكد أن حقل ال Token حقل مخفي ويحتوي على القيمة التالية b92f1fc2fce391ad7af633723afd3055
تأكد أن حقل ال Email لا يمكن التعديل عليه ويكون به القيمة التالية o@o.com
عند فتح الصفحة تأكد أن مؤشر الكتابة مركز عند الحقل Username
تأكد من أن حقل Username يقبل إسم مستخدم من 5 حروف إلى 20 حرف فقط ويكون إجباري
قم بعمل زر يقوم بإفراغ محتوى البيانات التي كتبها المستخدم ويكون إسمه Empty
قم بعمل زر لإرسال البيانات بإسم Send
يتم إرسال البيانات لنفس الصفحة
يجب أن تظهر البيانات التي تم إرسالها في الرابط بنفس الشكل الموجود في الصورة التالية -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<form>
			<label for="user">Username</label>
			<input
				id="user"
				type="text"
				name="username"
				autofocus
				minlength="5"
				maxlength="20"
				required
			/>
			<br />
			<br />
			<label for="email">Email</label>
			<input id="email" type="email" name="email" readonly value="o@o.com" />
			<br />
			<br />
			<label for="sub">Token</label>
			<input
				id="sub"
				type="text"
				name="taken"
				hidden
				value="b92f1fc2fce391ad7af633723afd3055"
			/>
			<br />
			<br />

<div>
				<input
					id="1"
					type="checkbox"
					name="skills"
					value="Problem Solving"
					checked
				/>
				<label for="1">Problem Solving</label>
			</div>
			<div>
				<input id="2" type="checkbox" name="skills" value="Logical Thinking" />
				<label for="2">Logical Thinking</label>
			</div>
			<div>
				<input id="3" type="checkbox" name="skills" value="Advanced Search" />
				<label for="3">Advanced Search</label>
			</div>
			<div>
				<input id="4" type="checkbox" name="skills" value="Analysis" />
				<label for="4">Analysis</label>
			</div>
			<div>
				<input id="5" type="checkbox" name="skills" value="Planning" />
				<label for="5">Planning</label>
			</div>
			<br />
			<hr />
			<br />
			<div>
				<input
					id="a"
					type="radio"
					name="job"
					value="Front-End Developer"
					checked
				/>
				<label for="a">Front-End Developer</label>
			</div>
			<div>
				<input id="b" type="radio" name="job" value=" Back-End Developer" />
				<label for="b"> Back-End Developer</label>
			</div>
			<div>
				<input id="c" type="radio" name="job" value="Business Analyst" />
				<label for="c">Business Analyst</label>
			</div>
			<div>
				<input id="d" type="radio" name="job" value="Project Manager" />
				<label for="d">Project Manager</label>
			</div>
			<div>
				<input id="e" type="radio" name="job" value="Scrum Master" />
				<label for="e">Scrum Master</label>
			</div>
			<br />
			<br />
			<input type="reset" value="Empty" />
			<input type="submit" value="Send" />

<label for="book">Choose Book:</label>
			<select id="book" name="book">
				<optgroup label="PHP">
					<option value="1">V5.0</option>
					<option value="2">V7.0</option>
					<option value="3">V8.0</option>
				</optgroup>
				<optgroup label="Python">
					<option value="4">V2.0</option>
					<option value="5">V3.0</option>
					<option value="6">V3.9</option>
				</optgroup>
			</select>

			<hr />
			<textarea
				name="brief"
				placeholder="Write Here Why You Want To Learn Programming"
				cols="40"
				rows="10"
			></textarea>
		</form>
	</body>

<!-- From 31:34 -->
<!-- التكليف 01 -->
<!DOCTYPE html>
<html>
	<head>
		<title>Page</title>
		<meta charset="UTF-8" />
		<meta name="description" content="My Info" />
	</head>
	<body>
		<form target="_blank" novalidate>
			<label for="search">Search</label>
			<br />
			<br />
			<input
				id="search"
				type="search"
				placeholder="Enter a Search Word"
				autofocus
			/>
			<br />
			<br />

			<label for="upload">Upload</label>
			<br />
			<br />
			<input id="upload" type="file" />
			<br />
			<br />

			<label for="url">Url</label>
			<br />
			<br />
			<input id="url" type="search" required />
			<br />
			<br />

			<label for="d">Date</label>
			<input id="d" type="date" value="1982-10-25" />
			<br /><br />
			<label for="m">Month</label>
			<input id="m" type="month" value="1982-10" />
			<br /><br />
			<input type="reset" value="Empty" />
			<input type="submit" value="Send" />
		</form>

		<pre>
Hello Line One
Hello Line Two
Hello Line Three
	Hello Line Four</pre
		>

		<iframe src="https://elzero.org" width="100%" height="400px"></iframe>
	</body>
</html>

<!-- ما هو العنصر المناسب لوضعه داخل النموذج لإرسال البيانات عند الضغط عليه ؟ -->
submit
<!-- ما هو العنصر المناسب ليكون عنوان للصفحة كاملة؟ -->
h1
<!-- ما هو العنصر المناسب ليكون عنوان لقسم داخل الصفحة؟ -->
h2
<!-- ما هو العنصر المناسب ليحتوي على فقرة نصية؟ -->
p
<!-- كيف تحدد لغة المحتوى الخاص بصفحتك. يمكنك كتابة العنصر الكامل مع ال Attributes الخاصة بتحديد اللغة -->
<meta charset="UTF-8" />
<!-- في عالم ال Accessibility هل الأفضل أن أكتب 10 – 20 أم 10 To 20 -->
10 To 20
<!-- إذا كان لديك عنصر Div وتريد الوصول إليه عن الطريق الضغط على ال Tab Button ماذا سوف تفعل في العنصر ؟ -->
tabindex="0"
<!--(ممكن رقم غير ال0) -->
(ARIA) is short for Accessible Rich Internet Applications

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Page</title>
		<meta name="description" content="My Info" />
	</head>
	<body>
		<div class="choose-skill">
			<div
				class="skill"
				aria-labelledby="python"
				tabindex="0"
				role="checkbox"
				aria-checked="true"
			>
				Python
			</div>
			<label id="python">Skill One</label>
			<div class="skill" aria-labelledby="php" tabindex="1" role="checkbox">
				PHP
			</div>
			<label id="php">Skill Two</label>
			<div
				class="skill"
				aria-labelledby="javascript"
				tabindex="2"
				role="checkbox"
			>
				JavaScript
			</div>
			<label id="javascript">Skill Three</label>
		</div>
	</body>
</html>

```