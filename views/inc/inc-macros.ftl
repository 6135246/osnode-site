<#macro selectOptions map selected>
	<#list map?keys as key>
		<#if WebUtils.equalsIgnoreCase(key, selected)>
			<option value="${key}" selected>${map[key]}</option>
		<#else>
			<option value="${key}">${map[key]}</option>
		</#if>
	</#list>
</#macro>

<#macro createNavListItem uri text>
	<#if WebUtils.isCurrentURI(uri)>
		<li class="active"><a href="${uri}">${text}</a></li>
	<#else>
		<li><a href="${uri}">${text}</a></li>
	</#if>
</#macro>
