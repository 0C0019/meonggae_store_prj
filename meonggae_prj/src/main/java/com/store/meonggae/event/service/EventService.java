package com.store.meonggae.event.service;

import com.store.meonggae.event.vo.PagingVO;

public class EventService {

	public int totalCount(PagingVO pVO) {
		int pageCnt = 0;

		return pageCnt;
	}

	public int pageScale() {
		int pageSize = 0;

		return pageSize;
	}

	public String pageNation(String url, String param, int totalPage, int currentPage) {

		StringBuilder pageNation = new StringBuilder();

		// �� ȭ�鿡�� ������ ������ �ε��� ��
		int pageNumber = 3;

		// ȭ�鿡 ������ ���� ������ ��ȣ
		int startPage = ((currentPage - 1) / pageNumber) * pageNumber + 1;

		// ȭ�鿡 ������ ������ ������ ��ȣ
		int endPage = ((startPage - 1) + pageNumber) / pageNumber * pageNumber;
		// int endPage = startPage - 1 + pageNumber;

		// �� �������� ���� ����� ������ ������ ������ �۴ٸ� �� ������ ���� ������ ������ ��ȣ�� �����ȴ�
		if (totalPage <= endPage) {
			endPage = totalPage;
		} // end if

		// ó�� ��������
		switch (totalPage) {
		case 0:
			break;
		default:
			pageNation.append("<a href='").append("?currentPage=").append(1).append(param).append(
					"'><input type='button' class='btn btn-sm btn-light marginL'  style='margin:0px auto;' value='ó�� ������'/></a>&nbsp;&nbsp;&nbsp;");
		} // end switch

		// ù �������� �ε��� ȭ���� �ƴ� ���
		// String prevMark = "[ << ]"; // ��ũ�� ��Ȱ��ȭ������, ��ũ�� �׻� �����ִ� ���
		String prevMark = ""; // ��ũ�� ��Ȱ��ȭ�Ǹ� ��ũ�� �������� �ʴ� ���
		int movePage = 0;
		if (currentPage > pageNumber) { // ���� ���������� 1 ���� �������� �̵�
			movePage = startPage - 1;
			prevMark = "<a href='" + url + "?currentPage=" + movePage + param
					+ "'><input type='button' class='btn btn-sm btn-light marginL' value='&lt;&lt;'/></a>&nbsp;&nbsp;&nbsp;";
		} // end if

		pageNation.append(prevMark);

		// ���� ������ ��ȣ���� �� ������ ��ȣ���� ȭ�鿡 ���
		movePage = startPage;
		while (movePage <= endPage) {
			if (movePage == currentPage) { // ���� �������� ���ؼ��� ��ũ�� �������� �ʴ´�
				pageNation.append("<input type='button' class='btn btn-sm btn-secondary marginL' value='")
						.append(currentPage).append("'/>&nbsp");
			} else {
				pageNation.append("<a href='").append("?currentPage=").append(movePage).append(param).append("'>")
						.append("<input type='button' class='btn btn-sm btn-light marginL' value='").append(movePage)
						.append("'/>").append("</a>&nbsp");
			} // end else
			movePage++;
		} // end while

		// �ڿ� �������� �� �ִ� ���
		String endMark = "";
		if (totalPage > endPage) {
			movePage = endPage + 1;
			endMark = "&nbsp;&nbsp;&nbsp;<a href='" + url + "?currentPage=" + movePage + param
					+ "'><input type='button' class='btn btn-sm btn-light marginL' value='&gt;&gt;'/></a>";
		} // end if

		pageNation.append(endMark);
		// pageNation.append(" ... ").append(endMark);

		// ������ ��������
		switch (totalPage) {
		case 0:
			break;
		default:
			pageNation.append("&nbsp;&nbsp;&nbsp;<a href='").append("?currentPage=").append(totalPage).append(param)
					.append("'><input type='button' class='btn btn-sm btn-light marginL'  style='margin:0px auto;' value='������ ������'/></a>");
		} // end switch

		return pageNation.toString();
	} // pageNation
}
