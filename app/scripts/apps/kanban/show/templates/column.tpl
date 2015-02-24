<div class="column-header">
	<span class="glyphicon glyphicon-sort" aria-hidden="true"></span>
	<div>
		<a><%= columnName %></a>
		<a>(<%= numElems %>)</a>
	</div>
	<% if (sortType == "list") { %>
		<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
	<% } else { %>
		<span class="glyphicon glyphicon-sort" aria-hidden="true"></span>
	<% } %>
</div>
<ul id="<%= columnId %>" class="column-list">
	<% if (columnName == "Backlog") { %>
		<li class="newTask"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></li>
		<li class="inputTask"><input id="newTask" type="text" name="newTask" placeholder="Add new task"/><span class="glyphicon glyphicon-plus submitTask" aria-hidden="true"></span></li>
	<% } %>
</ul>