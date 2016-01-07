function Article(t){this.author=t.author,this.authorUrl=t.authorUrl,this.title=t.title,this.category=t.category,this.body=t.body,this.publishedOn=t.publishedOn}var articles=[];Article.prototype.toHtml=function(){var t=$("article.template").clone();return t.removeClass("template"),this.publishedOn||t.addClass("draft"),t.attr("data-category",this.category),t.attr("data-author",this.author),t.find(".byline a").html(this.author),t.find(".byline a").attr("href",this.authorUrl),t.find("h1:first").html(this.title),t.find(".article-body").html(this.body),t.find("time[pubdate]").attr("datetime",this.publishedOn),t.find("time[pubdate]").attr("title",this.publishedOn),t.find("time").html("about "+parseInt((new Date-new Date(this.publishedOn))/60/60/24/1e3)+" days ago"),t.append("<hr>"),t},rawData.sort(function(t,a){return new Date(a.publishedOn)-new Date(t.publishedOn)}),rawData.forEach(function(t){articles.push(new Article(t))}),articles.forEach(function(t){$("#articles").append(t.toHtml())});