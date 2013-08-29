<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>学习分享</title>
<meta name="description" content="学习分享">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="/resources/css/frame-set.css" rel="stylesheet">
<script type="text/javascript" charset="utf-8" src="/resources/js/jquery-2.0.3.js"></script>
<!--[if lt IE 9]>
	<script type="text/javascript" charset="utf-8" src="/resources/js/html5shiv.js"></script>
<![endif]-->
<script type="text/javascript">
	$(document).ready(initViews);
	
	function initViews() {
		$(window).resize(function() {
			fix_height();
		}).resize();

		//$("#preview").contentWindow.focus();
	}
	
	function fix_height() {
		var h = $("#tray").height();
		$("#preview").attr("height", (($(window).height()) - h) + "px");
	}
</script>
</head>
<body>
	<div id="main">
		<div id="tray" class="topbar" style="width: auto;">
			<div class="fill">
				<div class="container">
					<a class="brand" href="javascript:;"><img src="//s3.amazonaws.com/wrapbootstrap/live/imgs/logo.png"></a>
					<h1 id="item_name">
						<a href="javascript:;">Base Admin</a>
					</h1>
					<div class="remove">
						<a class="btn" href="/" title="Remove this frame">Remove this frame &raquo;</a>
					</div>
				</div>
			</div>
		</div>
		<iframe id="preview" src="/web/topic/manage" frameborder="0" width="100%"></iframe>
	</div>
</body>
</html>