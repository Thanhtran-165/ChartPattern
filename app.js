/**
 * ChartPattern.learn - Interactive Learning Platform
 * Encyclopedia of Chart Patterns - Vietnamese Translation
 * Version: 2.0.0 - Phase 1: 20 Popular Patterns
 */

// ========================================
// Pattern Data - Phase 1: 20 Popular Patterns
// ========================================

const patternsData = {
    // ========== REVERSAL PATTERNS (Đảo chiều) ==========

    'head-shoulders': {
        name: 'Đầu và Vai',
        nameEn: 'Head and Shoulders',
        category: 'reversal',
        successRate: 89,
        avgMove: -18,
        avgDuration: '3-4 tuần',
        description: 'Mẫu Đầu và Vai là một trong những mẫu đảo chiều đáng tin cậy nhất trong phân tích kỹ thuật. Mẫu này xuất hiện ở đỉnh của xu hướng tăng và báo hiệu sự đảo ngược sang xu hướng giảm.',
        structure: [
            'Vai trái: Đỉnh đầu tiên, thấp hơn đầu',
            'Đầu: Đỉnh cao nhất, nằm ở giữa',
            'Vai phải: Đỉnh thứ ba, tương đương vai trái',
            'Đường cổ: Nối hai đáy giữa các đỉnh'
        ],
        tradingRules: [
            'Đợi giá phá vỡ đường cổ trước khi vào lệnh',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu giá = Khoảng cách từ đầu đến đường cổ',
            'Stop loss đặt trên vai phải'
        ],
        tips: [
            'Hai vai không cần đối xứng hoàn toàn',
            'Đường cổ có thể nghiêng nhẹ',
            'Phân tích thêm các chỉ báo khác để xác nhận'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 89,
            averageRise: 0,
            averageDecline: 18,
            pullbackRate: 4
        }
    },

    'inverse-head-shoulders': {
        name: 'Đầu và Vai Ngược',
        nameEn: 'Inverse Head and Shoulders',
        category: 'reversal',
        successRate: 81,
        avgMove: 22,
        avgDuration: '3-4 tuần',
        description: 'Mẫu Đầu và Vai Ngược là phiên bản đảo ngược của mẫu Đầu và Vai, xuất hiện ở đáy xu hướng giảm và báo hiệu đảo chiều tăng.',
        structure: [
            'Vai trái: Đáy đầu tiên, cao hơn đầu',
            'Đầu: Đáy thấp nhất, nằm ở giữa',
            'Vai phải: Đáy thứ ba, tương đương vai trái',
            'Đường cổ: Nối hai đỉnh giữa các đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường cổ',
            'Khối lượng nên tăng mạnh khi phá vỡ',
            'Mục tiêu = Khoảng cách từ đầu đến đường cổ',
            'Stop loss đặt dưới vai phải'
        ],
        tips: [
            'Tìm kiếm divergence với RSI/MACD',
            'Khối lượng tăng ở đầu và giảm ở vai phải',
            'Pullback về đường cổ là cơ hội mua thứ 2'
        ],
        statistics: {
            bullishBreakout: 81,
            bearishBreakout: 0,
            averageRise: 22,
            averageDecline: 0,
            pullbackRate: 8
        }
    },

    'double-top': {
        name: 'Đỉnh Kép',
        nameEn: 'Double Top',
        category: 'reversal',
        successRate: 78,
        avgMove: -15,
        avgDuration: '2-3 tuần',
        description: 'Mẫu Đỉnh Kép hình thành khi giá tạo hai đỉnh ở cùng một mức giá. Đây là mẫu đảo chiều giảm mạnh, báo hiệu kết thúc xu hướng tăng.',
        structure: [
            'Đỉnh đầu tiên: Giá đạt đỉnh và giảm',
            'Đáy giữa (Neckline): Mức hỗ trợ tạm thời',
            'Đỉnh thứ hai: Giá quay lại mức đỉnh cũ và giảm'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đáy giữa',
            'Khối lượng thường giảm ở đỉnh thứ hai',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss đặt trên đỉnh thứ hai'
        ],
        tips: [
            'Hai đỉnh nên cách nhau ít nhất 10 phiên',
            'Khối lượng thấp hơn ở đỉnh thứ hai là tín hiệu tốt',
            'Có thể có đỉnh thứ ba hiếm gặp'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 78,
            averageRise: 0,
            averageDecline: 15,
            pullbackRate: 9
        }
    },

    'double-bottom': {
        name: 'Đáy Kép',
        nameEn: 'Double Bottom',
        category: 'reversal',
        successRate: 82,
        avgMove: 20,
        avgDuration: '2-3 tuần',
        description: 'Mẫu Đáy Kép hình thành khi giá tạo hai đáy ở cùng một mức giá. Đây là mẫu đảo chiều tăng mạnh, báo hiệu kết thúc xu hướng giảm.',
        structure: [
            'Đáy đầu tiên: Giá đạt đáy và tăng',
            'Đỉnh giữa: Mức kháng cự tạm thời',
            'Đáy thứ hai: Giá quay lại mức đáy cũ và tăng'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đỉnh giữa',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss đặt dưới đáy thứ hai'
        ],
        tips: [
            'Hai đáy nên cách nhau ít nhất 10 phiên',
            'Khối lượng tăng ở đáy thứ hai là tín hiệu tốt',
            'Divergence với RSI tăng độ tin cậy'
        ],
        statistics: {
            bullishBreakout: 82,
            bearishBreakout: 0,
            averageRise: 20,
            averageDecline: 0,
            pullbackRate: 11
        }
    },

    'triple-top': {
        name: 'Đỉnh Ba',
        nameEn: 'Triple Top',
        category: 'reversal',
        successRate: 84,
        avgMove: -20,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Đỉnh Ba tương tự Đỉnh Kép nhưng có ba đỉnh ở cùng một mức giá. Tín hiệu đảo chiều mạnh hơn Đỉnh Kép.',
        structure: [
            'Ba đỉnh ở cùng mức giá hoặc gần bằng nhau',
            'Hai đáy giữa các đỉnh',
            'Đường cổ nối hai đáy thấp nhất'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường cổ',
            'Khối lượng giảm dần qua các đỉnh',
            'Mục tiêu = Khoảng cách từ đỉnh đến đường cổ',
            'Stop loss đặt trên đỉnh cao nhất'
        ],
        tips: [
            'Ba đỉnh không cần hoàn toàn bằng nhau',
            'Mẫu mạnh hơn Đỉnh Kép',
            'Thời gian hình thành càng lâu càng mạnh'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 84,
            averageRise: 0,
            averageDecline: 20,
            pullbackRate: 7
        }
    },

    'triple-bottom': {
        name: 'Đáy Ba',
        nameEn: 'Triple Bottom',
        category: 'reversal',
        successRate: 86,
        avgMove: 22,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Đáy Ba tương tự Đáy Kép nhưng có ba đáy ở cùng một mức giá. Tín hiệu đảo chiều mạnh hơn Đáy Kép.',
        structure: [
            'Ba đáy ở cùng mức giá hoặc gần bằng nhau',
            'Hai đỉnh giữa các đáy',
            'Đường kháng cự nối hai đỉnh cao nhất'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường kháng cự',
            'Khối lượng tăng dần qua các đáy',
            'Mục tiêu = Khoảng cách từ đáy đến đường kháng cự',
            'Stop loss đặt dưới đáy thấp nhất'
        ],
        tips: [
            'Ba đáy không cần hoàn toàn bằng nhau',
            'Mẫu mạnh hơn Đáy Kép',
            'Xác nhận mức hỗ trợ 3 lần rất mạnh'
        ],
        statistics: {
            bullishBreakout: 86,
            bearishBreakout: 0,
            averageRise: 22,
            averageDecline: 0,
            pullbackRate: 6
        }
    },

    'rising-wedge': {
        name: 'Nêm Tăng',
        nameEn: 'Rising Wedge',
        category: 'reversal',
        successRate: 72,
        avgMove: -14,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Nêm Tăng có hai đường biên đều dốc lên. Đây là mẫu đảo chiều giảm dù giá đang tăng trong nêm.',
        structure: [
            'Đường biên dưới: Dốc lên',
            'Đường biên trên: Dốc lên (độ dốc nhỏ hơn)',
            'Khối lượng giảm trong quá trình hình thành'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường biên dưới',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của nêm tại điểm rộng nhất',
            'Stop loss đặt trên đường biên trên'
        ],
        tips: [
            'Nêm tăng trong xu hướng tăng = Đảo chiều giảm',
            'Nêm tăng trong xu hướng giảm = Tiếp diễn giảm',
            'Phá vỡ sớm có xu hướng hiệu quả hơn'
        ],
        statistics: {
            bullishBreakout: 28,
            bearishBreakout: 72,
            averageRise: 8,
            averageDecline: 14,
            pullbackRate: 10
        }
    },

    'falling-wedge': {
        name: 'Nêm Giảm',
        nameEn: 'Falling Wedge',
        category: 'reversal',
        successRate: 81,
        avgMove: 18,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Nêm Giảm có hai đường biên đều dốc xuống. Đây là mẫu đảo chiều tăng dù giá đang giảm trong nêm.',
        structure: [
            'Đường biên trên: Dốc xuống',
            'Đường biên dưới: Dốc xuống (độ dốc lớn hơn)',
            'Khối lượng giảm trong quá trình hình thành'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường biên trên',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của nêm tại điểm rộng nhất',
            'Stop loss đặt dưới đường biên dưới'
        ],
        tips: [
            'Nêm giảm trong xu hướng giảm = Đảo chiều tăng',
            'Nêm giảm trong xu hướng tăng = Tiếp diễn tăng',
            'Một trong những mẫu đáng tin cậy nhất'
        ],
        statistics: {
            bullishBreakout: 81,
            bearishBreakout: 19,
            averageRise: 18,
            averageDecline: 5,
            pullbackRate: 8
        }
    },

    'rounding-top': {
        name: 'Đỉnh Tròn',
        nameEn: 'Rounding Top',
        category: 'reversal',
        successRate: 71,
        avgMove: -16,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Đỉnh Tròn hình thành với hình dáng cong lên trên, báo hiệu sự chuyển đổi từ xu hướng tăng sang giảm.',
        structure: [
            'Phần đầu: Giá tăng dần chậm lại',
            'Phần đỉnh: Giá đi ngang, tạo đỉnh tròn',
            'Phần đuôi: Giá giảm dần nhanh hơn'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường hỗ trợ',
            'Khối lượng thường giảm ở đỉnh',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss đặt trên đỉnh của mẫu'
        ],
        tips: [
            'Mẫu hình thành chậm, cần kiên nhẫn',
            'Xác nhận bằng đường khối lượng hình U ngược',
            'Hiệu quả hơn với cổ phiếu lớn'
        ],
        statistics: {
            bullishBreakout: 0,
            bearishBreakout: 71,
            averageRise: 0,
            averageDecline: 16,
            pullbackRate: 12
        }
    },

    'rounding-bottom': {
        name: 'Đáy Tròn',
        nameEn: 'Rounding Bottom / Saucer',
        category: 'reversal',
        successRate: 79,
        avgMove: 24,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Đáy Tròn hình thành với hình dáng cong xuống dưới, báo hiệu sự chuyển đổi từ xu hướng giảm sang tăng.',
        structure: [
            'Phần đầu: Giá giảm dần chậm lại',
            'Phần đáy: Giá đi ngang, tạo đáy tròn',
            'Phần đuôi: Giá tăng dần nhanh hơn'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường kháng cự',
            'Khối lượng thường hình chữ U',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss đặt dưới đáy của mẫu'
        ],
        tips: [
            'Mẫu hình thành chậm, cần kiên nhẫn',
            'Khối lượng tăng dần về cuối mẫu',
            'Còn gọi là "Saucer" (đĩa)'
        ],
        statistics: {
            bullishBreakout: 79,
            bearishBreakout: 0,
            averageRise: 24,
            averageDecline: 0,
            pullbackRate: 9
        }
    },

    // ========== CONTINUATION PATTERNS (Tiếp diễn) ==========

    'cup-handle': {
        name: 'Cốc và Tay Cầm',
        nameEn: 'Cup and Handle',
        category: 'continuation',
        successRate: 88,
        avgMove: 25,
        avgDuration: '2-6 tháng',
        description: 'Mẫu Cốc và Tay Cầm được phát triển bởi William O\'Neil. Đây là mẫu tiếp diễn tăng mạnh với hình dạng giống chiếc cốc có tay cầm.',
        structure: [
            'Phần cốc: Hình chữ U, kéo dài 1-6 tháng',
            'Phần tay cầm: Điều chỉnh nhẹ, kéo dài 1-4 tuần',
            'Điểm phá vỡ: Giá vượt qua đỉnh tay cầm'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đường kháng cự',
            'Khối lượng tăng mạnh khi phá vỡ',
            'Mục tiêu = Độ sâu của cốc',
            'Stop loss đặt dưới tay cầm'
        ],
        tips: [
            'Tay cầm không được thấp quá 1/3 cốc',
            'Phần cốc nên có hình chữ U, không phải V',
            'Phá vỡ với khối lượng cao là tín hiệu mạnh'
        ],
        statistics: {
            bullishBreakout: 88,
            bearishBreakout: 12,
            averageRise: 25,
            averageDecline: 0,
            pullbackRate: 5
        }
    },

    'ascending-triangle': {
        name: 'Tam Giác Tăng',
        nameEn: 'Ascending Triangle',
        category: 'continuation',
        successRate: 75,
        avgMove: 12,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Tam Giác Tăng có đường kháng cự nằm ngang và đường hỗ trợ tăng dần. Báo hiệu xu hướng tăng sẽ tiếp tục.',
        structure: [
            'Đường kháng cự: Nằm ngang, ở trên',
            'Đường hỗ trợ: Dốc lên, ở dưới',
            'Điểm hội tụ: Hai đường gặp nhau'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đường kháng cự',
            'Khối lượng giảm trong quá trình hình thành',
            'Mục tiêu = Chiều cao của tam giác',
            'Stop loss đặt dưới đường hỗ trợ'
        ],
        tips: [
            'Mẫu hình thành càng lâu càng mạnh',
            'Phá vỡ nên đi kèm khối lượng tăng',
            'Có thể xuất hiện ở cả đỉnh và đáy'
        ],
        statistics: {
            bullishBreakout: 75,
            bearishBreakout: 25,
            averageRise: 12,
            averageDecline: 5,
            pullbackRate: 11
        }
    },

    'descending-triangle': {
        name: 'Tam Giác Giảm',
        nameEn: 'Descending Triangle',
        category: 'continuation',
        successRate: 79,
        avgMove: -15,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Tam Giác Giảm có đường hỗ trợ nằm ngang và đường kháng cự giảm dần. Báo hiệu xu hướng giảm sẽ tiếp tục.',
        structure: [
            'Đường hỗ trợ: Nằm ngang, ở dưới',
            'Đường kháng cự: Dốc xuống, ở trên',
            'Điểm hội tụ: Hai đường gặp nhau'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường hỗ trợ',
            'Khối lượng giảm trong quá trình hình thành',
            'Mục tiêu = Chiều cao của tam giác',
            'Stop loss đặt trên đường kháng cự'
        ],
        tips: [
            'Mẫu hình thành càng lâu càng mạnh',
            'Phá vỡ nên đi kèm khối lượng tăng',
            'Là mẫu đối称 của Tam giác tăng'
        ],
        statistics: {
            bullishBreakout: 21,
            bearishBreakout: 79,
            averageRise: 4,
            averageDecline: 15,
            pullbackRate: 9
        }
    },

    'symmetrical-triangle': {
        name: 'Tam Giác Đối Xứng',
        nameEn: 'Symmetrical Triangle',
        category: 'bilateral',
        successRate: 64,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Tam Giác Đối Xứng có cả hai đường biên hội tụ. Có thể phá vỡ theo cả hai hướng với xác suất tương đương.',
        structure: [
            'Đường biên trên: Dốc xuống',
            'Đường biên dưới: Dốc lên',
            'Điểm hội tụ: Hai đường gặp nhau'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng trước khi vào lệnh',
            'Hai hướng phá vỡ có xác suất tương đương',
            'Mục tiêu = Chiều cao của tam giác',
            'Stop loss đặt bên kia đường phá vỡ'
        ],
        tips: [
            'Không dự đoán hướng phá vỡ',
            'Sử dụng các chỉ báo khác để xác nhận',
            'Xu hướng trước mẫu thường tiếp tục'
        ],
        statistics: {
            bullishBreakout: 52,
            bearishBreakout: 48,
            averageRise: 10,
            averageDecline: 10,
            pullbackRate: 14
        }
    },

    'flag': {
        name: 'Cờ Đuôi Nheo',
        nameEn: 'Flag',
        category: 'continuation',
        successRate: 85,
        avgMove: 12,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Cờ hình thành sau một xu hướng mạnh, cho phép thị trường nghỉ trước khi tiếp tục xu hướng cũ.',
        structure: [
            'Cột cờ: Xu hướng mạnh ban đầu',
            'Phần cờ: Điều chỉnh ngắn, đi ngược xu hướng',
            'Phá vỡ: Tiếp tục xu hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ khỏi phần cờ',
            'Khối lượng thấp trong phần cờ',
            'Mục tiêu = Độ dài của cột cờ',
            'Stop loss đặt bên kia phần cờ'
        ],
        tips: [
            'Cờ không nên kéo dài quá 20 phiên',
            'Khối lượng tăng khi phá vỡ',
            'Cờ tăng trong xu hướng giảm = Bull flag'
        ],
        statistics: {
            bullishBreakout: 67,
            bearishBreakout: 85,
            averageRise: 12,
            averageDecline: 12,
            pullbackRate: 6
        }
    },

    'bull-flag': {
        name: 'Cờ Tăng',
        nameEn: 'Bull Flag',
        category: 'continuation',
        successRate: 85,
        avgMove: 14,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Cờ Tăng xuất hiện trong xu hướng tăng, cho phép thị trường nghỉ ngơi trước khi tiếp tục tăng.',
        structure: [
            'Cột cờ: Tăng mạnh trong vài phiên',
            'Phần cờ: Điều chỉnh nhẹ, giảm dần',
            'Phá vỡ: Giá tiếp tục tăng'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường kháng cự của cờ',
            'Khối lượng giảm trong phần cờ',
            'Mục tiêu = Độ dài cột cờ tính từ điểm phá vỡ',
            'Stop loss đặt dưới đáy phần cờ'
        ],
        tips: [
            'Cờ nên nghiêng nhẹ xuống',
            'Cột cờ nên có khối lượng cao',
            'Phá vỡ nên có khối lượng tăng'
        ],
        statistics: {
            bullishBreakout: 85,
            bearishBreakout: 15,
            averageRise: 14,
            averageDecline: 0,
            pullbackRate: 5
        }
    },

    'bear-flag': {
        name: 'Cờ Giảm',
        nameEn: 'Bear Flag',
        category: 'continuation',
        successRate: 83,
        avgMove: -13,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Cờ Giảm xuất hiện trong xu hướng giảm, cho phép thị trường nghỉ ngơi trước khi tiếp tục giảm.',
        structure: [
            'Cột cờ: Giảm mạnh trong vài phiên',
            'Phần cờ: Điều chỉnh nhẹ, tăng dần',
            'Phá vỡ: Giá tiếp tục giảm'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường hỗ trợ của cờ',
            'Khối lượng giảm trong phần cờ',
            'Mục tiêu = Độ dài cột cờ tính từ điểm phá vỡ',
            'Stop loss đặt trên đỉnh phần cờ'
        ],
        tips: [
            'Cờ nên nghiêng nhẹ lên',
            'Cột cờ nên có khối lượng cao',
            'Phá vỡ nên có khối lượng tăng'
        ],
        statistics: {
            bullishBreakout: 17,
            bearishBreakout: 83,
            averageRise: 0,
            averageDecline: 13,
            pullbackRate: 7
        }
    },

    'pennant': {
        name: 'Cờ Đuôi Nheo Tam Giác',
        nameEn: 'Pennant',
        category: 'continuation',
        successRate: 82,
        avgMove: 11,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Pennant tương tự Flag nhưng phần cờ có hình tam giác nhỏ. Đây là mẫu tiếp diễn mạnh.',
        structure: [
            'Cột cờ: Xu hướng mạnh ban đầu',
            'Phần cờ: Tam giác nhỏ, hội tụ',
            'Phá vỡ: Tiếp tục xu hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ khỏi tam giác',
            'Khối lượng giảm trong phần tam giác',
            'Mục tiêu = Độ dài của cột cờ',
            'Stop loss bên kia tam giác'
        ],
        tips: [
            'Tam giác nên nhỏ và hội tụ nhanh',
            'Giống Flag nhưng có hình tam giác',
            'Phá vỡ sớm hiệu quả hơn'
        ],
        statistics: {
            bullishBreakout: 68,
            bearishBreakout: 82,
            averageRise: 11,
            averageDecline: 11,
            pullbackRate: 8
        }
    },

    'rectangle-top': {
        name: 'Hình Chữ Nhật Đỉnh',
        nameEn: 'Rectangle Top',
        category: 'bilateral',
        successRate: 62,
        avgMove: -8,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Hình Chữ Nhật Đỉnh là vùng giá đi ngang với biên trên và dưới xác định rõ. Thường phá vỡ về phía giảm.',
        structure: [
            'Biên trên: Đường kháng cự ngang',
            'Biên dưới: Đường hỗ trợ ngang',
            'Giá dao động trong kênh'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ một trong hai biên',
            'Khối lượng không nhất quán',
            'Mục tiêu = Chiều cao của kênh',
            'Stop loss bên kia biên phá vỡ'
        ],
        tips: [
            'Thường tiếp tục xu hướng cũ',
            'Cũng gọi là trading range',
            'Phá vỡ giả thường xảy ra'
        ],
        statistics: {
            bullishBreakout: 38,
            bearishBreakout: 62,
            averageRise: 6,
            averageDecline: 8,
            pullbackRate: 16
        }
    },

    'rectangle-bottom': {
        name: 'Hình Chữ Nhật Đáy',
        nameEn: 'Rectangle Bottom',
        category: 'bilateral',
        successRate: 64,
        avgMove: 10,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Hình Chữ Nhật Đáy là vùng giá đi ngang ở đáy. Thường phá vỡ về phía tăng.',
        structure: [
            'Biên trên: Đường kháng cự ngang',
            'Biên dưới: Đường hỗ trợ ngang',
            'Giá dao động trong kênh ở đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ biên trên',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của kênh',
            'Stop loss dưới biên dưới'
        ],
        tips: [
            'Thường xuất hiện sau xu hướng giảm',
            'Xác nhận tích lũy ở đáy',
            'Phá vỡ với khối lượng cao mạnh hơn'
        ],
        statistics: {
            bullishBreakout: 64,
            bearishBreakout: 36,
            averageRise: 10,
            averageDecline: 4,
            pullbackRate: 14
        }
    },

    // ========== PHASE 2: 20 MORE PATTERNS ==========

    // Broadening Patterns
    'broadening-top': {
        name: 'Đỉnh Mở Rộng',
        nameEn: 'Broadening Top',
        category: 'reversal',
        successRate: 61,
        avgMove: -12,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Đỉnh Mở Rộng có hai đường biên diverge (mở rộng ra) tại đỉnh xu hướng tăng. Báo hiệu đảo chiều giảm.',
        structure: [
            'Đường biên trên: Dốc lên',
            'Đường biên dưới: Dốc xuống',
            'Hai đường mở rộng ra như cái phễu ngược'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường biên dưới',
            'Khối lượng thường không nhất quán',
            'Mục tiêu = Chiều cao tối đa của mẫu',
            'Stop loss đặt trên đỉnh cao nhất'
        ],
        tips: [
            'Còn gọi là "Megaphone" (loa)',
            'Xác suất thành công thấp hơn các mẫu khác',
            'Cần xác nhận thêm từ các chỉ báo'
        ],
        statistics: {
            bullishBreakout: 39,
            bearishBreakout: 61,
            averageRise: 8,
            averageDecline: 12,
            pullbackRate: 18
        }
    },

    'broadening-bottom': {
        name: 'Đáy Mở Rộng',
        nameEn: 'Broadening Bottom',
        category: 'reversal',
        successRate: 68,
        avgMove: 18,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Đáy Mở Rộng có hai đường biên diverge tại đáy xu hướng giảm. Báo hiệu đảo chiều tăng.',
        structure: [
            'Đường biên trên: Dốc lên',
            'Đường biên dưới: Dốc xuống',
            'Hai đường mở rộng ra tại đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường biên trên',
            'Tìm divergence với RSI/MACD',
            'Mục tiêu = Chiều cao tối đa của mẫu',
            'Stop loss đặt dưới đáy thấp nhất'
        ],
        tips: [
            'Hiệu quả hơn Broadening Top',
            'Khối lượng nên tăng khi phá vỡ',
            'Xác nhận bằng các chỉ báo momentum'
        ],
        statistics: {
            bullishBreakout: 68,
            bearishBreakout: 32,
            averageRise: 18,
            averageDecline: 6,
            pullbackRate: 15
        }
    },

    'broadening-wedge-ascending': {
        name: 'Nêm Mở Rộng Tăng',
        nameEn: 'Broadening Wedge Ascending',
        category: 'bilateral',
        successRate: 58,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Nêm Mở Rộng Tăng có đường biên dưới nằm ngang và đường biên trên dốc lên. Có thể phá vỡ cả hai hướng.',
        structure: [
            'Đường biên dưới: Nằm ngang',
            'Đường biên trên: Dốc lên',
            'Mở rộng theo hướng lên'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường tiếp tục xu hướng cũ',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Không phổ biến như các mẫu khác',
            'Cần cẩn trọng với phá vỡ giả',
            'Kết hợp với khối lượng để xác nhận'
        ],
        statistics: {
            bullishBreakout: 42,
            bearishBreakout: 58,
            averageRise: 9,
            averageDecline: 11,
            pullbackRate: 19
        }
    },

    'broadening-wedge-descending': {
        name: 'Nêm Mở Rộng Giảm',
        nameEn: 'Broadening Wedge Descending',
        category: 'bilateral',
        successRate: 62,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Nêm Mở Rộng Giảm có đường biên trên nằm ngang và đường biên dưới dốc xuống.',
        structure: [
            'Đường biên trên: Nằm ngang',
            'Đường biên dưới: Dốc xuống',
            'Mở rộng theo hướng xuống'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường phá vỡ về phía giảm',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Tương tự descending triangle nhưng mở rộng',
            'Phá vỡ tăng cũng có thể xảy ra',
            'Xác nhận bằng khối lượng'
        ],
        statistics: {
            bullishBreakout: 38,
            bearishBreakout: 62,
            averageRise: 7,
            averageDecline: 12,
            pullbackRate: 17
        }
    },

    // Diamond Patterns
    'diamond-top': {
        name: 'Kim Cương Đỉnh',
        nameEn: 'Diamond Top',
        category: 'reversal',
        successRate: 77,
        avgMove: -16,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Kim Cương Đỉnh có hình dạng như viên kim cương, kết hợp broadening và triangle. Báo hiệu đảo chiều giảm.',
        structure: [
            'Phần đầu: Mở rộng như broadening',
            'Phần đuôi: Hội tụ như triangle',
            'Hình dạng tổng thể như kim cương'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường biên dưới',
            'Khối lượng thường giảm trong mẫu',
            'Mục tiêu = Chiều cao của kim cương',
            'Stop loss đặt trên đỉnh cao nhất'
        ],
        tips: [
            'Mẫu hiếm gặp nhưng đáng tin cậy',
            'Kết hợp 2 mẫu: broadening + triangle',
            'Xác nhận bằng divergence'
        ],
        statistics: {
            bullishBreakout: 23,
            bearishBreakout: 77,
            averageRise: 5,
            averageDecline: 16,
            pullbackRate: 8
        }
    },

    'diamond-bottom': {
        name: 'Kim Cương Đáy',
        nameEn: 'Diamond Bottom',
        category: 'reversal',
        successRate: 79,
        avgMove: 19,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Kim Cương Đáy xuất hiện ở đáy, báo hiệu đảo chiều tăng với hình dạng kim cương.',
        structure: [
            'Phần đầu: Mở rộng',
            'Phần đuôi: Hội tụ',
            'Xuất hiện tại đáy xu hướng'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá phá vỡ đường biên trên',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Chiều cao của kim cương',
            'Stop loss đặt dưới đáy thấp nhất'
        ],
        tips: [
            'Hiệu quả hơn Diamond Top',
            'Tỷ lệ thành công cao 79%',
            'Tìm divergence để xác nhận'
        ],
        statistics: {
            bullishBreakout: 79,
            bearishBreakout: 21,
            averageRise: 19,
            averageDecline: 4,
            pullbackRate: 7
        }
    },

    // Island Patterns
    'island-top': {
        name: 'Đảo Đỉnh',
        nameEn: 'Island Top',
        category: 'reversal',
        successRate: 73,
        avgMove: -14,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Đảo Đỉnh hình thành khi giá bị cô lập bởi hai khoảng trống (gaps) - một gap lên và một gap xuống.',
        structure: [
            'Gap tăng: Giá nhảy lên tạo đỉnh',
            'Vùng đảo: Giá giao dịch cô lập',
            'Gap giảm: Giá nhảy xuống xác nhận'
        ],
        tradingRules: [
            'Vào lệnh bán khi gap giảm xuất hiện',
            'Khối lượng thường cao tại đảo',
            'Mục tiêu = Chiều cao của đảo',
            'Stop loss trên đỉnh của đảo'
        ],
        tips: [
            'Rất hiếm gặp',
            'Tín hiệu đảo chiều mạnh',
            'Còn gọi là "Island Reversal"'
        ],
        statistics: {
            bullishBreakout: 27,
            bearishBreakout: 73,
            averageRise: 5,
            averageDecline: 14,
            pullbackRate: 11
        }
    },

    'island-bottom': {
        name: 'Đảo Đáy',
        nameEn: 'Island Bottom',
        category: 'reversal',
        successRate: 76,
        avgMove: 17,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Đảo Đáy hình thành khi giá bị cô lập bởi hai khoảng trống tại đáy.',
        structure: [
            'Gap giảm: Giá nhảy xuống tạo đáy',
            'Vùng đảo: Giá giao dịch cô lập',
            'Gap tăng: Giá nhảy lên xác nhận'
        ],
        tradingRules: [
            'Vào lệnh mua khi gap tăng xuất hiện',
            'Khối lượng thường cao tại đảo',
            'Mục tiêu = Chiều cao của đảo',
            'Stop loss dưới đáy của đảo'
        ],
        tips: [
            'Rất hiếm gặp',
            'Tín hiệu đảo chiều mạnh',
            'Xác nhận tốt với khối lượng cao'
        ],
        statistics: {
            bullishBreakout: 76,
            bearishBreakout: 24,
            averageRise: 17,
            averageDecline: 4,
            pullbackRate: 9
        }
    },

    'island-reversal': {
        name: 'Đảo Ngược Đảo',
        nameEn: 'Island Reversal',
        category: 'reversal',
        successRate: 74,
        avgMove: 0,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Đảo Ngược Đảo tổng quát, có thể xuất hiện ở cả đỉnh và đáy với đặc điểm bị cô lập bởi gaps.',
        structure: [
            'Gap ban đầu: Đi ngược xu hướng cũ',
            'Vùng đảo: Giao dịch cô lập',
            'Gap xác nhận: Quay ngược xu hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh theo hướng gap xác nhận',
            'Khối lượng cao tăng độ tin cậy',
            'Mục tiêu = Chiều cao của đảo',
            'Stop loss bên kia đảo'
        ],
        tips: [
            'Một trong những mẫu mạnh nhất',
            'Hiếm gặp nên rất đáng giá',
            'Kết hợp với RSI divergence'
        ],
        statistics: {
            bullishBreakout: 52,
            bearishBreakout: 48,
            averageRise: 14,
            averageDecline: 14,
            pullbackRate: 10
        }
    },

    // Gap Patterns
    'breakaway-gap': {
        name: 'Khoảng Trống Phá Vỡ',
        nameEn: 'Breakaway Gap',
        category: 'continuation',
        successRate: 71,
        avgMove: 15,
        avgDuration: 'Ngay lập tức',
        description: 'Khoảng Trống Phá Vỡ xuất hiện khi giá phá vỡ khỏi vùng tích lũy hoặc mẫu biểu đồ, báo hiệu bắt đầu xu hướng mới.',
        structure: [
            'Vùng tích lũy trước gap',
            'Gap lớn vượt mức kháng cự/hỗ trợ',
            'Giá tiếp tục theo hướng gap'
        ],
        tradingRules: [
            'Vào lệnh theo hướng gap',
            'Khối lượng phải cao khi gap',
            'Mục tiêu = Độ rộng gap + vùng tích lũy',
            'Stop loss trong vùng gap'
        ],
        tips: [
            'Gap không được lấp đầy trong 3 phiên',
            'Khối lượng cao là bắt buộc',
            'Báo hiệu xu hướng mạnh bắt đầu'
        ],
        statistics: {
            bullishBreakout: 71,
            bearishBreakout: 71,
            averageRise: 15,
            averageDecline: 15,
            pullbackRate: 12
        }
    },

    'runaway-gap': {
        name: 'Khoảng Trống Chạy',
        nameEn: 'Runaway Gap / Measuring Gap',
        category: 'continuation',
        successRate: 68,
        avgMove: 12,
        avgDuration: 'Giữa xu hướng',
        description: 'Khoảng Trống Chạy xuất hiện giữa xu hướng mạnh, báo hiệu xu hướng sẽ tiếp tục. Còn gọi là Measuring Gap.',
        structure: [
            'Xu hướng mạnh đang diễn ra',
            'Gap xuất hiện giữa xu hướng',
            'Giá tiếp tục theo hướng cũ'
        ],
        tradingRules: [
            'Vào lệnh theo hướng gap',
            'Xác nhận bằng khối lượng',
            'Mục tiêu = Đo từ bắt đầu xu hướng đến gap',
            'Stop loss bên kia gap'
        ],
        tips: [
            'Xuất hiện khoảng giữa xu hướng',
            'Giúp đoán mục tiêu giá',
            'Còn gọi là "continuation gap"'
        ],
        statistics: {
            bullishBreakout: 68,
            bearishBreakout: 68,
            averageRise: 12,
            averageDecline: 12,
            pullbackRate: 14
        }
    },

    'exhaustion-gap': {
        name: 'Khoảng Trống Kiệt Sức',
        nameEn: 'Exhaustion Gap',
        category: 'reversal',
        successRate: 65,
        avgMove: -10,
        avgDuration: 'Cuối xu hướng',
        description: 'Khoảng Trống Kiệt Sức xuất hiện cuối xu hướng, báo hiệu xu hướng sắp kết thúc và đảo chiều.',
        structure: [
            'Xu hướng mạnh đã kéo dài',
            'Gap xuất hiện cuối xu hướng',
            'Đảo chiều hoặc đi ngang sau đó'
        ],
        tradingRules: [
            'Chuẩn bị cho đảo chiều',
            'Đợi xác nhận đảo chiều trước vào lệnh',
            'Mục tiêu = Độ rộng gap có thể được lấp đầy',
            'Cẩn trọng với fakeout'
        ],
        tips: [
            'Khối lượng cao nhưng không duy trì',
            'Thường đi kèm divergence',
            'Cẩn thận phân biệt với runaway gap'
        ],
        statistics: {
            bullishBreakout: 35,
            bearishBreakout: 35,
            averageRise: 8,
            averageDecline: 10,
            pullbackRate: 22
        }
    },

    'common-gap': {
        name: 'Khoảng Trống Phổ Biến',
        nameEn: 'Common Gap',
        category: 'bilateral',
        successRate: 0,
        avgMove: 0,
        avgDuration: '1-3 phiên',
        description: 'Khoảng Trống Phổ Biến xuất hiện trong vùng giá đi ngang, thường được lấp đầy nhanh chóng. Không có giá trị dự báo.',
        structure: [
            'Xuất hiện trong trading range',
            'Không có xu hướng rõ ràng',
            'Thường được lấp đầy trong vài phiên'
        ],
        tradingRules: [
            'Không nên giao dịch dựa trên gap này',
            'Có thể fade (đánh ngược) gap',
            'Lấp đầy gap là mục tiêu',
            'Không có giá trị dự báo'
        ],
        tips: [
            'Loại gap phổ biến nhất',
            'Thường xuất hiện trong thị trường sideways',
            'Khối lượng thấp'
        ],
        statistics: {
            bullishBreakout: 50,
            bearishBreakout: 50,
            averageRise: 3,
            averageDecline: 3,
            pullbackRate: 80
        }
    },

    // Hook & Pipe Patterns
    'hook-reversal': {
        name: 'Đảo Ngược Móc',
        nameEn: 'Hook Reversal',
        category: 'reversal',
        successRate: 67,
        avgMove: 8,
        avgDuration: '1-3 phiên',
        description: 'Mẫu Đảo Ngược Móc là mẫu 1-3 phiên, giá mở và đóng trong phạm vi của phiên trước, báo hiệu đảo chiều ngắn hạn.',
        structure: [
            'Phiên 1: Xu hướng mạnh',
            'Phiên 2: Mở trong phạm vi phiên 1, đóng ngược hướng',
            'Phiên 3 (tùy chọn): Xác nhận đảo chiều'
        ],
        tradingRules: [
            'Vào lệnh khi đóng phiên xác nhận',
            'Khối lượng nên giảm ở mẫu',
            'Mục tiêu ngắn hạn',
            'Stop loss gần điểm vào lệnh'
        ],
        tips: [
            'Mẫu ngắn hạn, 1-3 phiên',
            'Hiệu quả trong thị trường có xu hướng',
            'Kết hợp với support/resistance'
        ],
        statistics: {
            bullishBreakout: 45,
            bearishBreakout: 55,
            averageRise: 8,
            averageDecline: 8,
            pullbackRate: 25
        }
    },

    'pipe-top': {
        name: 'Ống Đỉnh',
        nameEn: 'Pipe Top',
        category: 'reversal',
        successRate: 61,
        avgMove: -9,
        avgDuration: '2-5 phiên',
        description: 'Mẫu Ống Đỉnh có hai phiên liên tiếp có thân dài tương tự nhau tại đỉnh, báo hiệu đảo chiều giảm.',
        structure: [
            'Phiên 1: Nến tăng dài',
            'Phiên 2: Nến tăng dài tương tự',
            'Hai nến gần như song song'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá giảm dưới hai nến',
            'Khối lượng nên cao',
            'Mục tiêu = Độ dài của ống',
            'Stop loss trên đỉnh ống'
        ],
        tips: [
            'Hai nến nên có kích thước tương đương',
            'Hiếm gặp',
            'Xác nhận bằng phiên giảm tiếp theo'
        ],
        statistics: {
            bullishBreakout: 39,
            bearishBreakout: 61,
            averageRise: 4,
            averageDecline: 9,
            pullbackRate: 18
        }
    },

    'pipe-bottom': {
        name: 'Ống Đáy',
        nameEn: 'Pipe Bottom',
        category: 'reversal',
        successRate: 64,
        avgMove: 11,
        avgDuration: '2-5 phiên',
        description: 'Mẫu Ống Đáy có hai phiên giảm liên tiếp có thân dài tương tự nhau tại đáy, báo hiệu đảo chiều tăng.',
        structure: [
            'Phiên 1: Nến giảm dài',
            'Phiên 2: Nến giảm dài tương tự',
            'Hai nến gần như song song'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá tăng trên hai nến',
            'Khối lượng nên cao',
            'Mục tiêu = Độ dài của ống',
            'Stop loss dưới đáy ống'
        ],
        tips: [
            'Hai nến nên có kích thước tương đương',
            'Hiếm gặp',
            'Xác nhận bằng phiên tăng tiếp theo'
        ],
        statistics: {
            bullishBreakout: 64,
            bearishBreakout: 36,
            averageRise: 11,
            averageDecline: 4,
            pullbackRate: 16
        }
    },

    // Scallop Patterns
    'scallop-ascending': {
        name: 'Scallop Tăng',
        nameEn: 'Scallop Ascending',
        category: 'continuation',
        successRate: 73,
        avgMove: 14,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Scallop Tăng có hình dáng như vỏ sò, với các đáy tăng dần. Báo hiệu tiếp diễn tăng.',
        structure: [
            'Đáy đầu tiên',
            'Đáy thứ hai cao hơn',
            'Đáy thứ ba cao hơn nữa (tùy chọn)',
            'Hình dáng cong như vỏ sò'
        ],
        tradingRules: [
            'Vào lệnh khi giá vượt đỉnh gần nhất',
            'Khối lượng nên tăng khi vượt đỉnh',
            'Mục tiêu = Độ cao từ đáy đến đỉnh',
            'Stop loss dưới đáy gần nhất'
        ],
        tips: [
            'Tương tự rounding bottom nhưng nghiêng lên',
            'Mỗi đáy cao hơn đáy trước',
            'Kết hợp với trendline để xác nhận'
        ],
        statistics: {
            bullishBreakout: 73,
            bearishBreakout: 27,
            averageRise: 14,
            averageDecline: 3,
            pullbackRate: 11
        }
    },

    'scallop-descending': {
        name: 'Scallop Giảm',
        nameEn: 'Scallop Descending',
        category: 'continuation',
        successRate: 69,
        avgMove: -12,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Scallop Giảm có hình dáng như vỏ sò nghiêng xuống, với các đỉnh giảm dần.',
        structure: [
            'Đỉnh đầu tiên',
            'Đỉnh thứ hai thấp hơn',
            'Đỉnh thứ ba thấp hơn nữa (tùy chọn)',
            'Hình dáng cong nghiêng xuống'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá跌破 đáy gần nhất',
            'Khối lượng nên tăng khi phá vỡ',
            'Mục tiêu = Độ cao từ đỉnh đến đáy',
            'Stop loss trên đỉnh gần nhất'
        ],
        tips: [
            'Tương tự rounding top nhưng nghiêng xuống',
            'Mỗi đỉnh thấp hơn đỉnh trước',
            'Tiếp diễn xu hướng giảm'
        ],
        statistics: {
            bullishBreakout: 31,
            bearishBreakout: 69,
            averageRise: 4,
            averageDecline: 12,
            pullbackRate: 13
        }
    },

    // Tower Patterns
    'tower-top': {
        name: 'Tháp Đỉnh',
        nameEn: 'Tower Top',
        category: 'reversal',
        successRate: 70,
        avgMove: -13,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Tháp Đỉnh có các phiên tăng tạo tháp bên trái, sau đó các phiên giảm tạo tháp bên phải đối xứng.',
        structure: [
            'Phần trái: Nến tăng tạo tháp lên',
            'Đỉnh tháp: Điểm cao nhất',
            'Phần phải: Nến giảm tạo tháp xuống đối xứng'
        ],
        tradingRules: [
            'Vào lệnh bán khi tháp phải hoàn thành',
            'Khối lượng nên đối xứng hai bên',
            'Mục tiêu = Chiều cao của tháp',
            'Stop loss trên đỉnh tháp'
        ],
        tips: [
            'Mẫu đối xứng là quan trọng nhất',
            'Tương tự Adam and Eve',
            'Hiếm gặp nhưng đáng tin cậy'
        ],
        statistics: {
            bullishBreakout: 30,
            bearishBreakout: 70,
            averageRise: 4,
            averageDecline: 13,
            pullbackRate: 12
        }
    },

    'tower-bottom': {
        name: 'Tháp Đáy',
        nameEn: 'Tower Bottom',
        category: 'reversal',
        successRate: 72,
        avgMove: 15,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Tháp Đáy có các phiên giảm tạo tháp bên trái, sau đó các phiên tăng tạo tháp bên phải đối xứng.',
        structure: [
            'Phần trái: Nến giảm tạo tháp xuống',
            'Đáy tháp: Điểm thấp nhất',
            'Phần phải: Nến tăng tạo tháp lên đối xứng'
        ],
        tradingRules: [
            'Vào lệnh mua khi tháp phải hoàn thành',
            'Khối lượng nên đối xứng hai bên',
            'Mục tiêu = Chiều cao của tháp',
            'Stop loss dưới đáy tháp'
        ],
        tips: [
            'Mẫu đối xứng là quan trọng nhất',
            'Hiệu quả hơn Tower Top',
            'Xác nhận bằng khối lượng'
        ],
        statistics: {
            bullishBreakout: 72,
            bearishBreakout: 28,
            averageRise: 15,
            averageDecline: 4,
            pullbackRate: 10
        }
    },

    // ========== PHASE 3: 23 MORE PATTERNS (TOTAL 63) ==========

    // Adam & Eve Patterns
    'adam-adam-top': {
        name: 'Adam Adam Đỉnh',
        nameEn: 'Adam and Adam Top',
        category: 'reversal',
        successRate: 76,
        avgMove: -15,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Adam Adam Đỉnh có hai đỉnh nhọn (Adam) với đáy giữa cũng nhọn. Hình dáng tổng thể sắc cạnh.',
        structure: [
            'Đỉnh 1: Nhọn, sắc (Adam)',
            'Đáy giữa: Nhọn, sắc (Adam)',
            'Đỉnh 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Hai đỉnh nên có hình dáng tương tự',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh cao nhất'
        ],
        tips: [
            'Adam = đỉnh nhọn, nhanh',
            'Hiệu quả hơn Double Top thông thường',
            'Tìm divergence với oscillator'
        ],
        statistics: {
            bullishBreakout: 24,
            bearishBreakout: 76,
            averageRise: 5,
            averageDecline: 15,
            pullbackRate: 8
        }
    },

    'adam-adam-bottom': {
        name: 'Adam Adam Đáy',
        nameEn: 'Adam and Adam Bottom',
        category: 'reversal',
        successRate: 79,
        avgMove: 18,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Adam Adam Đáy có hai đáy nhọn với đỉnh giữa cũng nhọn. Hình dáng sắc cạnh ở đáy.',
        structure: [
            'Đáy 1: Nhọn, sắc (Adam)',
            'Đỉnh giữa: Nhọn, sắc (Adam)',
            'Đáy 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Hai đáy nên có hình dáng tương tự',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy thấp nhất'
        ],
        tips: [
            'Adam = đáy nhọn, V-shape',
            'Hiệu quả hơn Double Bottom thông thường',
            'Khối lượng nên tăng ở đáy thứ 2'
        ],
        statistics: {
            bullishBreakout: 79,
            bearishBreakout: 21,
            averageRise: 18,
            averageDecline: 4,
            pullbackRate: 7
        }
    },

    'adam-eve-top': {
        name: 'Adam Eve Đỉnh',
        nameEn: 'Adam and Eve Top',
        category: 'reversal',
        successRate: 74,
        avgMove: -14,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Adam Eve Đỉnh có đỉnh đầu nhọn (Adam), đỉnh hai tròn (Eve), tạo sự kết hợp thú vị.',
        structure: [
            'Đỉnh 1: Nhọn, sắc (Adam)',
            'Đáy giữa: Có thể tròn hoặc nhọn',
            'Đỉnh 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Đỉnh Adam trước đỉnh Eve',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh Eve'
        ],
        tips: [
            'Adam = nhọn, Eve = tròn',
            'Kết hợp hai kiểu hình dáng',
            'Thời gian hình thành đỉnh Eve dài hơn'
        ],
        statistics: {
            bullishBreakout: 26,
            bearishBreakout: 74,
            averageRise: 5,
            averageDecline: 14,
            pullbackRate: 10
        }
    },

    'adam-eve-bottom': {
        name: 'Adam Eve Đáy',
        nameEn: 'Adam and Eve Bottom',
        category: 'reversal',
        successRate: 78,
        avgMove: 20,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Adam Eve Đáy có đáy đầu nhọn, đáy hai tròn, báo hiệu đảo chiều tăng mạnh.',
        structure: [
            'Đáy 1: Nhọn, sắc (Adam)',
            'Đỉnh giữa: Có thể tròn hoặc nhọn',
            'ĐáĐáy 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Đáy Adam trước đáy Eve',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy Eve'
        ],
        tips: [
            'Một trong những mẫu đáng tin cậy nhất',
            'Đáy Eve mất nhiều thời gian hơn Adam',
            'Khối lượng tăng ở cuối mẫu Eve'
        ],
        statistics: {
            bullishBreakout: 78,
            bearishBreakout: 22,
            averageRise: 20,
            averageDecline: 4,
            pullbackRate: 6
        }
    },

    'eve-adam-top': {
        name: 'Eve Adam Đỉnh',
        nameEn: 'Eve and Adam Top',
        category: 'reversal',
        successRate: 71,
        avgMove: -13,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Eve Adam Đỉnh có đỉnh đầu tròn (Eve), đỉnh hai nhọn (Adam), ít phổ biến hơn.',
        structure: [
            'Đỉnh 1: Tròn, cong (Eve)',
            'Đáy giữa: Có thể tròn hoặc nhọn',
            'Đỉnh 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Đỉnh Eve trước đỉnh Adam',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh Adam'
        ],
        tips: [
            'Ít phổ biến hơn Adam Eve',
            'Eve = tròn, Adam = nhọn',
            'Cẩn trọng với phá vỡ giả'
        ],
        statistics: {
            bullishBreakout: 29,
            bearishBreakout: 71,
            averageRise: 6,
            averageDecline: 13,
            pullbackRate: 12
        }
    },

    'eve-adam-bottom': {
        name: 'Eve Adam Đáy',
        nameEn: 'Eve and Adam Bottom',
        category: 'reversal',
        successRate: 75,
        avgMove: 17,
        avgDuration: '3-5 tuần',
        description: 'Mẫu Eve Adam Đáy có đáy đầu tròn, đáy hai nhọn, báo hiệu đảo chiều tăng.',
        structure: [
            'Đáy 1: Tròn, cong (Eve)',
            'Đỉnh giữa: Có thể tròn hoặc nhọn',
            'Đáy 2: Nhọn, sắc (Adam)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Đáy Eve trước đáy Adam',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy Adam'
        ],
        tips: [
            'Ít phổ biến hơn Adam Eve Bottom',
            'Khối lượng quan trọng để xác nhận',
            'Kết hợp với RSI divergence'
        ],
        statistics: {
            bullishBreakout: 75,
            bearishBreakout: 25,
            averageRise: 17,
            averageDecline: 4,
            pullbackRate: 9
        }
    },

    'eve-eve-top': {
        name: 'Eve Eve Đỉnh',
        nameEn: 'Eve and Eve Top',
        category: 'reversal',
        successRate: 68,
        avgMove: -12,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Eve Eve Đỉnh có hai đỉnh tròn với đáy giữa cũng tròn. Mẫu mềm mại, mất nhiều thời gian.',
        structure: [
            'Đỉnh 1: Tròn, cong (Eve)',
            'Đáy giữa: Tròn, cong',
            'Đỉnh 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh bán khi phá vỡ đáy giữa',
            'Mẫu hình thành chậm',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh cao nhất'
        ],
        tips: [
            'Eve = tròn, mềm mại',
            'Mất nhiều thời gian hình thành',
            'Khối lượng thường thấp ở đỉnh'
        ],
        statistics: {
            bullishBreakout: 32,
            bearishBreakout: 68,
            averageRise: 6,
            averageDecline: 12,
            pullbackRate: 14
        }
    },

    'eve-eve-bottom': {
        name: 'Eve Eve Đáy',
        nameEn: 'Eve and Eve Bottom',
        category: 'reversal',
        successRate: 73,
        avgMove: 19,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Eve Eve Đáy có hai đáy tròn với đỉnh giữa cũng tròn. Mẫu mềm mại ở đáy.',
        structure: [
            'Đáy 1: Tròn, cong (Eve)',
            'Đỉnh giữa: Tròn, cong',
            'Đáy 2: Tròn, cong (Eve)'
        ],
        tradingRules: [
            'Vào lệnh mua khi phá vỡ đỉnh giữa',
            'Kiên nhẫn chờ mẫu hoàn thành',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy thấp nhất'
        ],
        tips: [
            'Rounding bottom kép',
            'Mẫu hình thành chậm nhưng đáng tin cậy',
            'Khối lượng hình chữ U'
        ],
        statistics: {
            bullishBreakout: 73,
            bearishBreakout: 27,
            averageRise: 19,
            averageDecline: 4,
            pullbackRate: 8
        }
    },

    // Bump and Run Patterns
    'bump-run-top': {
        name: 'Bump and Run Đỉnh',
        nameEn: 'Bump and Run Top',
        category: 'reversal',
        successRate: 71,
        avgMove: -14,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Bump and Run Đỉnh có xu hướng tăng dốc (bump) sau giai đoạn ổn định, báo hiệu đảo chiều.',
        structure: [
            'Lead-in: Xu hướng tăng thoải mái',
            'Bump: Tăng dốc đột ngột',
            'Run: Giảm nhanh sau đỉnh'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá vượt trendline bump',
            'Bump phải dốc hơn lead-in gấp đôi',
            'Mục tiêu = Độ cao của bump',
            'Stop loss trên đỉnh bump'
        ],
        tips: [
            'Bump = phần dốc đột ngột',
            'Run = sự sụt giảm nhanh',
            'Tương tự blow-off top'
        ],
        statistics: {
            bullishBreakout: 29,
            bearishBreakout: 71,
            averageRise: 5,
            averageDecline: 14,
            pullbackRate: 11
        }
    },

    'bump-run-bottom': {
        name: 'Bump and Run Đáy',
        nameEn: 'Bump and Run Bottom / Bump and Run Reversal',
        category: 'reversal',
        successRate: 74,
        avgMove: 22,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Bump and Run Đáy có xu hướng giảm dốc (bump) sau giai đoạn ổn định, báo hiệu đảo chiều tăng mạnh.',
        structure: [
            'Lead-in: Xu hướng giảm thoải mái',
            'Bump: Giảm dốc đột ngột',
            'Run: Tăng nhanh sau đáy'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá vượt trendline bump',
            'Bump phải dốc hơn lead-in gấp đôi',
            'Mục tiêu = Độ sâu của bump',
            'Stop loss dưới đáy bump'
        ],
        tips: [
            'Còn gọi là "Bump and Run Reversal"',
            'Một trong những mẫu mạnh nhất',
            'Khối lượng cao ở bump và run'
        ],
        statistics: {
            bullishBreakout: 74,
            bearishBreakout: 26,
            averageRise: 22,
            averageDecline: 5,
            pullbackRate: 7
        }
    },

    // Horn Patterns
    'horn-top': {
        name: 'Sừng Đỉnh',
        nameEn: 'Horn Top',
        category: 'reversal',
        successRate: 69,
        avgMove: -11,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Sừng Đỉnh có hai đỉnh nhọn gần nhau với đáy giữa rất nông, giống đôi sừng.',
        structure: [
            'Đỉnh 1: Nhọn, sắc',
            'Đáy giữa: Rất nông',
            'Đỉnh 2: Nhọn, sắc, gần đỉnh 1'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá giảm dưới đáy giữa',
            'Hai đỉnh gần nhau về thời gian',
            'Mục tiêu = Khoảng cách từ đỉnh đến đáy giữa',
            'Stop loss trên đỉnh cao nhất'
        ],
        tips: [
            'Giống Double Top nhưng các đỉnh gần nhau hơn',
            'Hai đỉnh nên có kích thước tương đương',
            'Hiếm gặp'
        ],
        statistics: {
            bullishBreakout: 31,
            bearishBreakout: 69,
            averageRise: 5,
            averageDecline: 11,
            pullbackRate: 15
        }
    },

    'horn-bottom': {
        name: 'Sừng Đáy',
        nameEn: 'Horn Bottom',
        category: 'reversal',
        successRate: 72,
        avgMove: 16,
        avgDuration: '1-3 tuần',
        description: 'Mẫu Sừng Đáy có hai đáy nhọn gần nhau với đỉnh giữa rất thấp, giống đôi sừng ngược.',
        structure: [
            'Đáy 1: Nhọn, sắc',
            'Đỉnh giữa: Rất thấp',
            'Đáy 2: Nhọn, sắc, gần đáy 1'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá tăng trên đỉnh giữa',
            'Hai đáy gần nhau về thời gian',
            'Mục tiêu = Khoảng cách từ đáy đến đỉnh giữa',
            'Stop loss dưới đáy thấp nhất'
        ],
        tips: [
            'Giống Double Bottom nhưng các đáy gần nhau hơn',
            'Hiệu quả hơn Horn Top',
            'Xác nhận bằng khối lượng'
        ],
        statistics: {
            bullishBreakout: 72,
            bearishBreakout: 28,
            averageRise: 16,
            averageDecline: 4,
            pullbackRate: 12
        }
    },

    // High and Tight Flag
    'high-tight-flag': {
        name: 'Cờ Cao và Chặt',
        nameEn: 'High and Tight Flag',
        category: 'continuation',
        successRate: 85,
        avgMove: 69,
        avgDuration: '1-2 tháng',
        description: 'Mẫu Cờ Cao và Chặt là mẫu tiếp diễn tăng mạnh, giá tăng gấp đôi trong 1-2 tháng rồi đi ngang.',
        structure: [
            'Phần cột cờ: Tăng mạnh, gấp đôi giá',
            'Phần cờ: Đi ngang chặt, không quá 25%回落',
            'Phá vỡ: Tiếp tục tăng mạnh'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đỉnh cờ',
            'Cờ không nên thấp quá 25% so với đỉnh',
            'Mục tiêu = Độ dài cột cờ',
            'Stop loss dưới đáy cờ'
        ],
        tips: [
            'Mẫu mạnh nhất của Bulkowski',
            'Cột cờ phải tăng mạnh (gấp đôi)',
            'Cờ phải chặt, không điều chỉnh nhiều'
        ],
        statistics: {
            bullishBreakout: 85,
            bearishBreakout: 15,
            averageRise: 69,
            averageDecline: 0,
            pullbackRate: 5
        }
    },

    // Cup Variations
    'cup-high-handle': {
        name: 'Cốc Tay Cầm Cao',
        nameEn: 'Cup with High Handle',
        category: 'continuation',
        successRate: 81,
        avgMove: 22,
        avgDuration: '2-5 tháng',
        description: 'Mẫu Cốc Tay Cầm Cao có tay cầm nằm ở phần trên của cốc, gần đỉnh cốc.',
        structure: [
            'Phần cốc: Hình chữ U',
            'Tay cầm: Nằm ở phần cao của cốc',
            'Phá vỡ: Vượt đỉnh tay cầm'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đỉnh tay cầm',
            'Tay cầm ở phần trên 1/3 của cốc',
            'Mục tiêu = Độ sâu của cốc',
            'Stop loss dưới tay cầm'
        ],
        tips: [
            'Tay cầm cao hơn Cup and Handle thông thường',
            'Hiệu quả tương đương',
            'Kết hợp với khối lượng tăng'
        ],
        statistics: {
            bullishBreakout: 81,
            bearishBreakout: 19,
            averageRise: 22,
            averageDecline: 0,
            pullbackRate: 6
        }
    },

    'cup-low-handle': {
        name: 'Cốc Tay Cầm Thấp',
        nameEn: 'Cup with Low Handle',
        category: 'continuation',
        successRate: 73,
        avgMove: 18,
        avgDuration: '2-5 tháng',
        description: 'Mẫu Cốc Tay Cầm Thấp có tay cầm nằm ở phần dưới của cốc, gần đáy cốc.',
        structure: [
            'Phần cốc: Hình chữ U',
            'Tay cầm: Nằm ở phần dưới của cốc',
            'Phá vỡ: Vượt đỉnh tay cầm'
        ],
        tradingRules: [
            'Vào lệnh khi giá phá vỡ đỉnh tay cầm',
            'Tay cầm ở phần dưới 1/3 của cốc',
            'Mục tiêu = Độ sâu của cốc',
            'Stop loss dưới tay cầm'
        ],
        tips: [
            'Ít hiệu quả hơn Cup with High Handle',
            'Cần xác nhận kỹ hơn',
            'Khối lượng quan trọng khi phá vỡ'
        ],
        statistics: {
            bullishBreakout: 73,
            bearishBreakout: 27,
            averageRise: 18,
            averageDecline: 0,
            pullbackRate: 9
        }
    },

    // Complex Head and Shoulders
    'complex-head-shoulders': {
        name: 'Đầu và Vai Phức Tạp',
        nameEn: 'Complex Head and Shoulders',
        category: 'reversal',
        successRate: 82,
        avgMove: -17,
        avgDuration: '4-8 tuần',
        description: 'Mẫu Đầu và Vai Phức Tạp có nhiều vai hoặc nhiều đầu, biến thể của mẫu cơ bản.',
        structure: [
            'Có thể có 2 vai trái và/hoặc 2 vai phải',
            'Có thể có 2 đầu (Double Head)',
            'Đường cổ có thể không thẳng'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá phá vỡ đường cổ',
            'Đếm số vai và đầu để xác định',
            'Mục tiêu = Khoảng cách từ đầu đến đường cổ',
            'Stop loss trên vai phải cao nhất'
        ],
        tips: [
            'Biến thể phức tạp của Head and Shoulders',
            'Tỷ lệ thành công cao hơn mẫu cơ bản',
            'Đường cổ có thể cong'
        ],
        statistics: {
            bullishBreakout: 18,
            bearishBreakout: 82,
            averageRise: 4,
            averageDecline: 17,
            pullbackRate: 5
        }
    },

    // Inverted Scallop
    'inverted-scallop': {
        name: 'Scallop Ngược',
        nameEn: 'Inverted Scallop',
        category: 'reversal',
        successRate: 65,
        avgMove: 10,
        avgDuration: '2-4 tuần',
        description: 'Mẫu Scallop Ngược có hình dáng cong lên (inverted so với scallop thường), báo hiệu đảo chiều.',
        structure: [
            'Điểm bắt đầu thấp',
            'Phần giữa cong lên',
            'Điểm kết thúc thấp hơn hoặc bằng điểm bắt đầu'
        ],
        tradingRules: [
            'Vào lệnh theo hướng phá vỡ',
            'Có thể đảo chiều cả hai hướng',
            'Mục tiêu = Độ cao của mẫu',
            'Stop loss bên kia mẫu'
        ],
        tips: [
            'Ít phổ biến',
            'Xác suất thành công trung bình',
            'Kết hợp với các chỉ báo khác'
        ],
        statistics: {
            bullishBreakout: 48,
            bearishBreakout: 52,
            averageRise: 10,
            averageDecline: 10,
            pullbackRate: 18
        }
    },

    // Lazy S
    'lazy-s': {
        name: 'Chữ S Lười',
        nameEn: 'Lazy S',
        category: 'bilateral',
        successRate: 55,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Chữ S Lười có hình dáng như chữ S nằm ngang, giá đi theo đường cong hình S.',
        structure: [
            'Phần 1: Cong lên',
            'Phần 2: Cong xuống',
            'Tổng thể: Hình S nằm ngang'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Không có hướng ưu tiên',
            'Mục tiêu = Biên độ của mẫu',
            'Stop loss bên kia mẫu'
        ],
        tips: [
            'Mẫu hiếm gặp',
            'Tỷ lệ thành công thấp',
            'Cần cẩn trọng'
        ],
        statistics: {
            bullishBreakout: 50,
            bearishBreakout: 50,
            averageRise: 8,
            averageDecline: 8,
            pullbackRate: 22
        }
    },

    // Three Rising Valleys / Falling Peaks
    'three-rising-valleys': {
        name: 'Ba Thung Lũng Tăng',
        nameEn: 'Three Rising Valleys',
        category: 'continuation',
        successRate: 76,
        avgMove: 16,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Ba Thung Lũng Tăng có ba đáy tăng dần, báo hiệu tiếp diễn xu hướng tăng.',
        structure: [
            'Đáy 1: Thấp nhất',
            'Đáy 2: Cao hơn đáy 1',
            'Đáy 3: Cao hơn đáy 2'
        ],
        tradingRules: [
            'Vào lệnh mua khi giá vượt đỉnh gần nhất',
            'Mỗi đáy cao hơn đáy trước',
            'Mục tiêu = Khoảng cách từ đáy 1 đến đỉnh',
            'Stop loss dưới đáy 3'
        ],
        tips: [
            'Tương tự Triple Bottom nhưng các đáy tăng dần',
            'Tiếp diễn xu hướng tăng',
            'Kết hợp với trendline'
        ],
        statistics: {
            bullishBreakout: 76,
            bearishBreakout: 24,
            averageRise: 16,
            averageDecline: 3,
            pullbackRate: 8
        }
    },

    'three-falling-peaks': {
        name: 'Ba Đỉnh Giảm',
        nameEn: 'Three Falling Peaks',
        category: 'continuation',
        successRate: 74,
        avgMove: -14,
        avgDuration: '3-6 tuần',
        description: 'Mẫu Ba Đỉnh Giảm có ba đỉnh giảm dần, báo hiệu tiếp diễn xu hướng giảm.',
        structure: [
            'Đỉnh 1: Cao nhất',
            'Đỉnh 2: Thấp hơn đỉnh 1',
            'Đỉnh 3: Thấp hơn đỉnh 2'
        ],
        tradingRules: [
            'Vào lệnh bán khi giá跌破 đáy gần nhất',
            'Mỗi đỉnh thấp hơn đỉnh trước',
            'Mục tiêu = Khoảng cách từ đỉnh 1 đến đáy',
            'Stop loss trên đỉnh 3'
        ],
        tips: [
            'Tương tự Triple Top nhưng các đỉnh giảm dần',
            'Tiếp diễn xu hướng giảm',
            'Kết hợp với trendline'
        ],
        statistics: {
            bullishBreakout: 26,
            bearishBreakout: 74,
            averageRise: 4,
            averageDecline: 14,
            pullbackRate: 9
        }
    },

    // V Top / Bottom
    'v-top': {
        name: 'Đỉnh V',
        nameEn: 'V Top / Spike Top',
        category: 'reversal',
        successRate: 58,
        avgMove: -10,
        avgDuration: '1-2 tuần',
        description: 'Mẫu Đỉnh V là mẫu đảo chiều nhanh, giá tăng mạnh rồi giảm mạnh tạo hình chữ V.',
        structure: [
            'Xu hướng tăng mạnh',
            'Đỉnh nhọn, sắc',
            'Giảm nhanh ngang bằng độ tăng'
        ],
        tradingRules: [
            'Vào lệnh bán khi xác nhận đỉnh',
            'Khối lượng cao ở đỉnh',
            'Mục tiêu = Độ cao của V',
            'Stop loss trên đỉnh V'
        ],
        tips: [
            'Mẫu đảo chiều nhanh nhất',
            'Khó dự đoán và giao dịch',
            'Cần phản ứng nhanh'
        ],
        statistics: {
            bullishBreakout: 42,
            bearishBreakout: 58,
            averageRise: 5,
            averageDecline: 10,
            pullbackRate: 20
        }
    },

    'v-bottom': {
        name: 'Đáy V',
        nameEn: 'V Bottom / Spike Bottom',
        category: 'reversal',
        successRate: 62,
        avgMove: 14,
        avgDuration: '1-2 tuần',
        description: 'Mẫu Đáy V là mẫu đảo chiều nhanh, giá giảm mạnh rồi tăng mạnh tạo hình chữ V ngược.',
        structure: [
            'Xu hướng giảm mạnh',
            'Đáy nhọn, sắc',
            'Tăng nhanh ngang bằng độ giảm'
        ],
        tradingRules: [
            'Vào lệnh mua khi xác nhận đáy',
            'Khối lượng cao ở đáy',
            'Mục tiêu = Độ sâu của V',
            'Stop loss dưới đáy V'
        ],
        tips: [
            'Mẫu đảo chiều nhanh nhất ở đáy',
            'Khó dự đoán',
            'Cần phản ứng nhanh'
        ],
        statistics: {
            bullishBreakout: 62,
            bearishBreakout: 38,
            averageRise: 14,
            averageDecline: 4,
            pullbackRate: 18
        }
    },

    // Right-Angled Broadening
    'right-angled-broadening-ascending': {
        name: 'Mở Rộng Vuông Tăng',
        nameEn: 'Right-Angled Broadening Ascending',
        category: 'bilateral',
        successRate: 59,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Mở Rộng Vuông Tăng có đường biên dưới nằm ngang và đường biên trên dốc lên, mở rộng.',
        structure: [
            'Đường biên dưới: Nằm ngang',
            'Đường biên trên: Dốc lên',
            'Mở rộng theo hướng lên'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường phá vỡ về phía tăng',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Kết hợp broadening và ascending',
            'Hiếm gặp',
            'Cần xác nhận kỹ'
        ],
        statistics: {
            bullishBreakout: 59,
            bearishBreakout: 41,
            averageRise: 11,
            averageDecline: 8,
            pullbackRate: 16
        }
    },

    'right-angled-broadening-descending': {
        name: 'Mở Rộng Vuông Giảm',
        nameEn: 'Right-Angled Broadening Descending',
        category: 'bilateral',
        successRate: 61,
        avgMove: 0,
        avgDuration: '2-6 tuần',
        description: 'Mẫu Mở Rộng Vuông Giảm có đường biên trên nằm ngang và đường biên dưới dốc xuống, mở rộng.',
        structure: [
            'Đường biên trên: Nằm ngang',
            'Đường biên dưới: Dốc xuống',
            'Mở rộng theo hướng xuống'
        ],
        tradingRules: [
            'Đợi phá vỡ rõ ràng',
            'Thường phá vỡ về phía giảm',
            'Mục tiêu = Chiều cao của mẫu',
            'Stop loss bên kia đường phá vỡ'
        ],
        tips: [
            'Kết hợp broadening và descending',
            'Hiếm gặp',
            'Phá vỡ giảm phổ biến hơn'
        ],
        statistics: {
            bullishBreakout: 39,
            bearishBreakout: 61,
            averageRise: 7,
            averageDecline: 11,
            pullbackRate: 15
        }
    }
};

// ========================================
// Quiz Data - Expanded
// ========================================

const quizData = [
    {
        question: 'Mẫu Đầu và Vai báo hiệu xu hướng gì?',
        visual: 'head-shoulders',
        options: [
            'Tiếp tục tăng',
            'Đảo chiều giảm',
            'Tiếp tục giảm',
            'Đảo chiều tăng'
        ],
        correct: 1,
        explanation: 'Mẫu Đầu và Vai xuất hiện ở đỉnh xu hướng tăng và báo hiệu đảo chiều sang xu hướng giảm với tỷ lệ thành công 89%.'
    },
    {
        question: 'Đường cổ (Neckline) trong mẫu Đầu và Vai là gì?',
        options: [
            'Đường nối hai vai',
            'Đường nối hai đáy giữa vai trái-đầu và đầu-vai phải',
            'Đường nằm ngang qua đỉnh đầu',
            'Đường hỗ trợ chính'
        ],
        correct: 1,
        explanation: 'Đường cổ là đường nối hai đáy thấp giữa vai trái - đầu và đầu - vai phải. Đây là mức hỗ trợ quan trọng cần phá vỡ để xác nhận mẫu.'
    },
    {
        question: 'Mẫu Đỉnh Kép (Double Top) có tỷ lệ thành công bao nhiêu?',
        options: [
            '65%',
            '78%',
            '89%',
            '95%'
        ],
        correct: 1,
        explanation: 'Theo thống kê của Bulkowski, mẫu Đỉnh Kép có tỷ lệ thành công 78% khi giá phá vỡ đáy giữa.'
    },
    {
        question: 'Mẫu Cốc và Tay Cầm (Cup and Handle) thuộc loại nào?',
        options: [
            'Đảo chiều giảm',
            'Đảo chiều tăng',
            'Tiếp diễn',
            'Hai chiều'
        ],
        correct: 2,
        explanation: 'Mẫu Cốc và Tay Cầm là mẫu tiếp diễn tăng, xuất hiện trong xu hướng tăng và báo hiệu xu hướng sẽ tiếp tục sau giai đoạn điều chỉnh.'
    },
    {
        question: 'Mẫu Nêm Tăng (Rising Wedge) báo hiệu điều gì?',
        options: [
            'Tiếp tục tăng mạnh',
            'Đảo chiều tăng',
            'Đảo chiều giảm',
            'Đi ngang'
        ],
        correct: 2,
        explanation: 'Mẫu Nêm Tăng có hai đường biên đều dốc lên nhưng báo hiệu đảo chiều giảm với tỷ lệ thành công 72%. Đây là mẫu "nghịch lý" trong phân tích kỹ thuật.'
    },
    {
        question: 'Tam Giác Đối Xứng (Symmetrical Triangle) có đặc điểm gì?',
        options: [
            'Chỉ phá vỡ về phía tăng',
            'Chỉ phá vỡ về phía giảm',
            'Có thể phá vỡ cả hai hướng',
            'Luôn tiếp tục xu hướng cũ'
        ],
        correct: 2,
        explanation: 'Tam Giác Đối Xứng có thể phá vỡ theo cả hai hướng với xác suất tương đương. Tỷ lệ thành công thấp hơn (64%) vì không dự đoán được hướng.'
    },
    {
        question: 'Khối lượng giao dịch trong mẫu Cờ (Flag) nên như thế nào?',
        options: [
            'Tăng mạnh trong phần cờ',
            'Giảm trong phần cờ, tăng khi phá vỡ',
            'Luôn luôn tăng',
            'Không quan trọng'
        ],
        correct: 1,
        explanation: 'Khối lượng nên giảm trong quá trình hình thành phần cờ và tăng mạnh khi phá vỡ. Đây là đặc điểm quan trọng để xác nhận mẫu.'
    },
    {
        question: 'Mẫu Đáy Ba (Triple Bottom) mạnh hơn Đáy Kép vì sao?',
        options: [
            'Có nhiều đáy hơn',
            'Xác nhận mức hỗ trợ nhiều lần hơn',
            'Dễ nhận diện hơn',
            'Tất cả đều đúng'
        ],
        correct: 1,
        explanation: 'Mẫu Đáy Ba xác nhận mức hỗ trợ ba lần thay vì hai lần, tạo tín hiệu mạnh hơn với tỷ lệ thành công 86% so với 82% của Đáy Kép.'
    },
    {
        question: 'Mục tiêu giá sau khi phá vỡ mẫu Tam Giác Tăng được tính như thế nào?',
        options: [
            'Bằng chiều rộng của tam giác',
            'Bằng chiều cao của tam giác',
            'Bằng 50% chiều cao tam giác',
            'Bằng 200% chiều cao tam giác'
        ],
        correct: 1,
        explanation: 'Mục tiêu giá sau khi phá vỡ mẫu tam giác bằng chiều cao của tam giác (khoảng cách từ đỉnh đến đáy tại điểm rộng nhất).'
    },
    {
        question: 'Khi nào nên vào lệnh với mẫu Đầu và Vai ngược (Inverse Head and Shoulders)?',
        options: [
            'Khi vai phải hình thành',
            'Khi giá chạm đường cổ lần đầu',
            'Khi giá phá vỡ đường cổ với khối lượng tăng',
            'Khi đầu hình thành xong'
        ],
        correct: 2,
        explanation: 'Vào lệnh mua khi giá phá vỡ đường cổ với khối lượng tăng. Đây là điểm xác nhận mẫu với rủi ro thấp nhất.'
    },
    {
        question: 'Mẫu Nêm Giảm (Falling Wedge) trong xu hướng tăng báo hiệu gì?',
        options: [
            'Đảo chiều giảm',
            'Tiếp diễn tăng',
            'Đảo chiều tăng',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Nêm Giảm trong xu hướng tăng là mẫu tiếp diễn tăng, báo hiệu xu hướng tăng sẽ tiếp tục sau khi phá vỡ đường biên trên.'
    },
    {
        question: 'Mẫu Đáy Tròn (Rounding Bottom) còn được gọi là gì?',
        options: [
            'Cốc',
            'Đĩa (Saucer)',
            'Bát',
            'Vũng'
        ],
        correct: 1,
        explanation: 'Mẫu Đáy Tròn còn được gọi là Saucer (đĩa) vì hình dạng giống chiếc đĩa úp.'
    },
    {
        question: 'Phần tay cầm trong mẫu Cup and Handle không nên thấp quá bao nhiêu so với cốc?',
        options: [
            '1/2 cốc',
            '1/3 cốc',
            '1/4 cốc',
            '2/3 cốc'
        ],
        correct: 1,
        explanation: 'Tay cầm không nên thấp quá 1/3 độ sâu của cốc. Nếu thấp hơn, mẫu có thể không còn hiệu quả.'
    },
    {
        question: 'Mẫu nào có tỷ lệ thành công cao nhất trong các mẫu đảo chiều tăng?',
        options: [
            'Đáy Kép',
            'Đáy Ba',
            'Đầu và Vai Ngược',
            'Đáy Tròn'
        ],
        correct: 1,
        explanation: 'Mẫu Đáy Ba có tỷ lệ thành công 86%, cao nhất trong các mẫu đảo chiều tăng phổ biến.'
    },
    {
        question: 'Phần cờ trong mẫu Pennant có hình dạng gì?',
        options: [
            'Hình chữ nhật',
            'Hình tam giác nhỏ',
            'Hình nêm',
            'Hình vòng cung'
        ],
        correct: 1,
        explanation: 'Pennant có phần cờ hình tam giác nhỏ hội tụ, khác với Flag có phần cờ hình chữ nhật nghiêng.'
    },
    {
        question: 'Mẫu Hình Chữ Nhật Đỉnh (Rectangle Top) thường phá vỡ về hướng nào?',
        options: [
            'Luôn lên',
            'Luôn xuống',
            'Thường xuống (62%)',
            'Ngẫu nhiên'
        ],
        correct: 2,
        explanation: 'Mẫu Hình Chữ Nhật Đỉnh thường phá vỡ về phía giảm với tỷ lệ 62%, tiếp tục xu hướng giảm trước đó.'
    },
    {
        question: 'Thời gian hình thành mẫu Cốc và Tay Cầm thường là bao lâu?',
        options: [
            '1-2 tuần',
            '1-3 tháng',
            '2-6 tháng',
            '6-12 tháng'
        ],
        correct: 2,
        explanation: 'Mẫu Cốc và Tay Cầm thường mất 2-6 tháng để hình thành, với phần cốc chiếm phần lớn thời gian.'
    },
    {
        question: 'Dấu hiệu nào cho thấy mẫu Đỉnh Kép đang hình thành?',
        options: [
            'Khối lượng tăng ở đỉnh thứ hai',
            'Khối lượng giảm ở đỉnh thứ hai',
            'Giá phá vỡ đỉnh đầu tiên',
            'RSI divergence'
        ],
        correct: 1,
        explanation: 'Khối lượng giảm ở đỉnh thứ hai so với đỉnh đầu tiên là dấu hiệu cho thấy áp lực mua yếu đi, mẫu Đỉnh Kép đang hình thành.'
    },
    {
        question: 'Stop loss cho mẫu Đầu và Vai nên đặt ở đâu?',
        options: [
            'Trên đỉnh đầu',
            'Trên vai phải',
            'Dưới đường cổ',
            'Trên vai trái'
        ],
        correct: 1,
        explanation: 'Stop loss nên đặt trên vai phải (hoặc cao hơn vai phải một chút), vì nếu giá vượt qua đây thì mẫu không còn hiệu quả.'
    },
    {
        question: 'Mẫu Cờ Giảm (Bear Flag) có phần cờ nghiêng về hướng nào?',
        options: [
            'Nghiêng lên',
            'Nghiêng xuống',
            'Nằm ngang',
            'Không xác định'
        ],
        correct: 0,
        explanation: 'Mẫu Cờ Giảm có phần cờ nghiêng nhẹ lên (đi ngược xu hướng giảm chính), tạo thành kênh giá hẹp.'
    },
    // ========== PHASE 4: 50+ MORE QUIZ QUESTIONS ==========
    {
        question: 'Mẫu Broadening Top còn được gọi là gì?',
        options: [
            'Phễu',
            'Loa (Megaphone)',
            'Kim cương',
            'Nêm'
        ],
        correct: 1,
        explanation: 'Mẫu Broadening Top còn được gọi là "Megaphone" (loa) vì hình dạng hai đường biên mở rộng ra như cái loa.'
    },
    {
        question: 'Mẫu Diamond Top có tỷ lệ thành công bao nhiêu?',
        options: [
            '65%',
            '70%',
            '77%',
            '85%'
        ],
        correct: 2,
        explanation: 'Mẫu Diamond Top có tỷ lệ thành công 77%, khá cao so với các mẫu khác.'
    },
    {
        question: 'Đặc điểm nào phân biệt Diamond với Broadening?',
        options: [
            'Diamond có hai đường biên hội tụ ở cuối',
            'Diamond chỉ có một đường biên',
            'Diamond không có biên',
            'Diamond luôn nằm ngang'
        ],
        correct: 0,
        explanation: 'Diamond kết hợp Broadening (mở rộng) ở đầu và Triangle (hội tụ) ở cuối, tạo hình kim cương.'
    },
    {
        question: 'Mẫu Island Reversal hình thành như thế nào?',
        options: [
            'Một gap duy nhất',
            'Hai gap cô lập một vùng giá',
            'Ba gap liên tiếp',
            'Không có gap'
        ],
        correct: 1,
        explanation: 'Island Reversal có hai gap (khoảng trống) cô lập một vùng giá tạo thành "đảo" bị tách biệt.'
    },
    {
        question: 'Gap nào xuất hiện đầu xu hướng và báo hiệu bắt đầu xu hướng mới?',
        options: [
            'Exhaustion Gap',
            'Runaway Gap',
            'Breakaway Gap',
            'Common Gap'
        ],
        correct: 2,
        explanation: 'Breakaway Gap xuất hiện khi giá phá vỡ khỏi vùng tích lũy, báo hiệu bắt đầu xu hướng mới.'
    },
    {
        question: 'Runaway Gap còn được gọi là gì?',
        options: [
            'Breakaway Gap',
            'Measuring Gap',
            'Exhaustion Gap',
            'Common Gap'
        ],
        correct: 1,
        explanation: 'Runaway Gap còn được gọi là Measuring Gap vì nó giúp đoán mục tiêu giá của xu hướng.'
    },
    {
        question: 'Loại gap nào thường được lấp đầy nhanh nhất?',
        options: [
            'Breakaway Gap',
            'Runaway Gap',
            'Common Gap',
            'Exhaustion Gap'
        ],
        correct: 2,
        explanation: 'Common Gap xuất hiện trong trading range và thường được lấp đầy trong 1-3 phiên.'
    },
    {
        question: 'Mẫu Pipe Top/Bottom có đặc điểm gì?',
        options: [
            'Ba nến song song',
            'Hai nến dài song song',
            'Một nến dài',
            'Nến doji'
        ],
        correct: 1,
        explanation: 'Pipe Top/Bottom có hai nến dài song song, giống hình chiếc ống.'
    },
    {
        question: 'Mẫu Scallop Ascending báo hiệu gì?',
        options: [
            'Đảo chiều giảm',
            'Tiếp diễn tăng',
            'Đảo chiều tăng',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Scallop Ascending có các đáy tăng dần, báo hiệu tiếp diễn xu hướng tăng.'
    },
    {
        question: 'Mẫu Tower Top/Bottom có đặc điểm gì quan trọng?',
        options: [
            'Hình dạng bất đối xứng',
            'Tính đối xứng giữa hai bên',
            'Chỉ có một bên',
            'Không có hình dạng cụ thể'
        ],
        correct: 1,
        explanation: 'Tính đối xứng giữa tháp trái và tháp phải là đặc điểm quan trọng nhất của Tower pattern.'
    },
    {
        question: 'Adam trong Adam & Eve pattern có hình dạng gì?',
        options: [
            'Tròn, cong',
            'Nhọn, sắc',
            'Nằm ngang',
            'Dốc thẳng'
        ],
        correct: 1,
        explanation: 'Adam có hình dạng nhọn, sắc (V-shape hoặc A-shape), trong khi Eve có hình dạng tròn, cong.'
    },
    {
        question: 'Eve trong Adam & Eve pattern có hình dạng gì?',
        options: [
            'Nhọn, sắc',
            'Tròn, cong (U-shape)',
            'Thẳng đứng',
            'Zigzag'
        ],
        correct: 1,
        explanation: 'Eve có hình dạng tròn, cong như chữ U, mềm mại hơn Adam.'
    },
    {
        question: 'Mẫu nào có hiệu quả cao nhất trong các biến thể Adam & Eve?',
        options: [
            'Adam Adam',
            'Eve Eve',
            'Adam Eve Bottom',
            'Eve Adam Top'
        ],
        correct: 2,
        explanation: 'Adam Eve Bottom có tỷ lệ thành công 78% và average rise 20%, cao nhất trong các biến thể.'
    },
    {
        question: 'Mẫu Bump and Run có đặc điểm gì về độ dốc?',
        options: [
            'Bump dốc bằng lead-in',
            'Bump dốc hơn lead-in gấp đôi',
            'Bump nằm ngang',
            'Không có quy định'
        ],
        correct: 1,
        explanation: 'Trong Bump and Run, phần Bump phải dốc hơn phần Lead-in ít nhất gấp đôi.'
    },
    {
        question: 'Mẫu Horn Top khác Double Top ở điểm nào?',
        options: [
            'Hai đỉnh xa nhau hơn',
            'Hai đỉnh gần nhau hơn',
            'Chỉ có một đỉnh',
            'Ba đỉnh'
        ],
        correct: 1,
        explanation: 'Horn Top có hai đỉnh nhọn gần nhau về thời gian, trong khi Double Top có hai đỉnh cách nhau ít nhất 10 phiên.'
    },
    {
        question: 'High and Tight Flag có đặc điểm gì đặc biệt?',
        options: [
            'Giá tăng 20% trong cột cờ',
            'Giá tăng gấp đôi trong cột cờ',
            'Giá giảm mạnh',
            'Giá đi ngang'
        ],
        correct: 1,
        explanation: 'High and Tight Flag có cột cờ tăng gấp đôi giá trong 1-2 tháng, là mẫu mạnh nhất của Bulkowski với average rise 69%.'
    },
    {
        question: 'Cup with High Handle khác Cup and Handle thông thường ở đâu?',
        options: [
            'Tay cầm ở phần cao của cốc',
            'Không có tay cầm',
            'Cốc sâu hơn',
            'Cốc nông hơn'
        ],
        correct: 0,
        explanation: 'Cup with High Handle có tay cầm nằm ở phần trên 1/3 của cốc, trong khi Cup and Handle thường có tay cầm ở giữa.'
    },
    {
        question: 'Complex Head and Shoulders có thể có bao nhiêu vai?',
        options: [
            'Chỉ 2 vai',
            '2-4 vai hoặc nhiều hơn',
            'Chỉ 1 vai',
            'Không có vai'
        ],
        correct: 1,
        explanation: 'Complex Head and Shoulders có thể có 2 vai trái, 2 vai phải, hoặc nhiều đầu.'
    },
    {
        question: 'Mẫu Three Rising Valleys báo hiệu gì?',
        options: [
            'Đảo chiều giảm',
            'Tiếp diễn tăng',
            'Đảo chiều tăng',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Three Rising Valleys có ba đáy tăng dần, báo hiệu tiếp diễn xu hướng tăng.'
    },
    {
        question: 'Mẫu V Top có tỷ lệ thành công bao nhiêu?',
        options: [
            '45%',
            '58%',
            '75%',
            '89%'
        ],
        correct: 1,
        explanation: 'V Top có tỷ lệ thành công 58%, thấp hơn các mẫu khác vì khó dự đoán và giao dịch.'
    },
    {
        question: 'Tại sao V Bottom khó giao dịch?',
        options: [
            'Mẫu quá lớn',
            'Đảo chiều quá nhanh, khó dự đoán',
            'Khối lượng thấp',
            'Thời gian hình thành quá dài'
        ],
        correct: 1,
        explanation: 'V Bottom đảo chiều rất nhanh, khó dự đoán và cần phản ứng nhanh để giao dịch.'
    },
    {
        question: 'Right-Angled Broadening Ascending thường phá vỡ về hướng nào?',
        options: [
            'Luôn xuống',
            'Luôn lên',
            'Thường lên (59%)',
            'Ngẫu nhiên'
        ],
        correct: 2,
        explanation: 'Right-Angled Broadening Ascending thường phá vỡ về phía tăng với tỷ lệ 59%.'
    },
    {
        question: 'Mẫu nào có average rise cao nhất?',
        options: [
            'Cup and Handle',
            'High and Tight Flag',
            'Double Bottom',
            'Adam Eve Bottom'
        ],
        correct: 1,
        explanation: 'High and Tight Flag có average rise 69%, cao nhất trong tất cả các mẫu của Bulkowski.'
    },
    {
        question: 'Pullback rate là gì trong thống kê của Bulkowski?',
        options: [
            'Tỷ lệ giá quay lại điểm phá vỡ',
            'Tỷ lệ thất bại',
            'Tỷ lệ thành công',
            'Thời gian hình thành'
        ],
        correct: 0,
        explanation: 'Pullback rate là tỷ lệ giá quay lại vùng phá vỡ sau khi phá vỡ thành công.'
    },
    {
        question: 'Mẫu nào có pullback rate thấp nhất (ít quay lại nhất)?',
        options: [
            'Double Top',
            'Complex Head and Shoulders',
            'Common Gap',
            'Triple Bottom'
        ],
        correct: 1,
        explanation: 'Complex Head and Shoulders có pullback rate chỉ 5%, nghĩa là ít khi giá quay lại vùng phá vỡ.'
    },
    {
        question: 'Trong mô hình Bulkowski, mẫu nào đáng tin cậy nhất cho đảo chiều giảm?',
        options: [
            'Double Top',
            'Head and Shoulders',
            'Triple Top',
            'Rising Wedge'
        ],
        correct: 1,
        explanation: 'Head and Shoulders có tỷ lệ thành công 89%, cao nhất trong các mẫu đảo chiều giảm.'
    },
    {
        question: 'Khối lượng trong mẫu Cốc và Tay Cầm nên như thế nào khi phá vỡ?',
        options: [
            'Giảm mạnh',
            'Tăng mạnh',
            'Không đổi',
            'Không quan trọng'
        ],
        correct: 1,
        explanation: 'Khối lượng nên tăng mạnh khi phá vỡ đỉnh tay cầm, xác nhận tín hiệu mua.'
    },
    {
        question: 'Mẫu Tam Giác Đối Xứng có tỷ lệ phá vỡ tăng/giảm như thế nào?',
        options: [
            '80% tăng, 20% giảm',
            '20% tăng, 80% giảm',
            'Xấp xỉ 50/50',
            '100% tăng'
        ],
        correct: 2,
        explanation: 'Tam Giác Đối Xứng có tỷ lệ phá vỡ tăng (52%) và giảm (48%) xấp xỉ bằng nhau.'
    },
    {
        question: 'Neckline trong Head and Shoulders là gì?',
        options: [
            'Đường qua đỉnh đầu',
            'Đường nối hai vai',
            'Đường hỗ trợ nối hai đáy',
            'Đường trendline'
        ],
        correct: 2,
        explanation: 'Neckline là đường hỗ trợ nối hai đáy thấp nhất giữa vai trái-đầu và đầu-vai phải.'
    },
    {
        question: 'Mẫu Rectangle Bottom thường phá vỡ về hướng nào?',
        options: [
            'Luôn giảm',
            'Thường tăng (64%)',
            'Luôn tăng',
            'Ngẫu nhiên'
        ],
        correct: 1,
        explanation: 'Rectangle Bottom thường phá vỡ về phía tăng với tỷ lệ 64%.'
    },
    {
        question: 'Pennant khác Flag ở điểm nào?',
        options: [
            'Pennant có phần cờ hình tam giác',
            'Pennant không có cột cờ',
            'Pennant lớn hơn',
            'Pennant không có cờ'
        ],
        correct: 0,
        explanation: 'Pennant có phần cờ hình tam giác nhỏ hội tụ, trong khi Flag có phần cờ hình chữ nhật nghiêng.'
    },
    {
        question: 'Rounding Bottom còn được gọi là gì?',
        options: [
            'Cốc',
            'Saucer (Đĩa)',
            'Bát',
            'Vũng'
        ],
        correct: 1,
        explanation: 'Rounding Bottom còn được gọi là Saucer (đĩa) vì hình dạng cong giống chiếc đĩa.'
    },
    {
        question: 'Thời gian hình thành Cup and Handle thường là bao lâu?',
        options: [
            '1-2 tuần',
            '1-3 tháng',
            '2-6 tháng',
            '6-12 tháng'
        ],
        correct: 2,
        explanation: 'Cup and Handle thường mất 2-6 tháng để hình thành, với phần cốc chiếm phần lớn thời gian.'
    },
    {
        question: 'Mẫu Broadening Bottom hiệu quả hơn Broadening Top bao nhiêu?',
        options: [
            'Giống nhau',
            'Bottom cao hơn (68% vs 61%)',
            'Top cao hơn',
            'Không so sánh được'
        ],
        correct: 1,
        explanation: 'Broadening Bottom có tỷ lệ thành công 68%, cao hơn Broadening Top (61%).'
    },
    {
        question: 'Exhaustion Gap xuất hiện ở đâu trong xu hướng?',
        options: [
            'Đầu xu hướng',
            'Giữa xu hướng',
            'Cuối xu hướng',
            'Bất kỳ đâu'
        ],
        correct: 2,
        explanation: 'Exhaustion Gap xuất hiện ở cuối xu hướng, báo hiệu xu hướng sắp kết thúc và đảo chiều.'
    },
    {
        question: 'Dấu hiệu nào cho thấy gap là Breakaway Gap?',
        options: [
            'Gap nhỏ, khối lượng thấp',
            'Gap lớn, khối lượng cao, không được lấp trong 3 phiên',
            'Gap được lấp ngay',
            'Xuất hiện trong sideways'
        ],
        correct: 1,
        explanation: 'Breakaway Gap có gap lớn, khối lượng cao, và không được lấp đầy trong ít nhất 3 phiên.'
    },
    {
        question: 'Mẫu Lazy S có đặc điểm gì?',
        options: [
            'Hình dạng chữ V',
            'Hình dạng chữ S nằm ngang',
            'Hình dạng chữ W',
            'Hình dạng chữ M'
        ],
        correct: 1,
        explanation: 'Lazy S có hình dạng như chữ S nằm ngang, với giá đi theo đường cong hình S.'
    },
    {
        question: 'Mẫu nào có tỷ lệ thành công cao nhất cho đảo chiều tăng?',
        options: [
            'Double Bottom',
            'Triple Bottom',
            'Adam Eve Bottom',
            'Bump and Run Bottom'
        ],
        correct: 3,
        explanation: 'Bump and Run Bottom có tỷ lệ thành công 74% với average rise 22%, rất hiệu quả.'
    },
    {
        question: 'Inverted Scallop khác Scallop thường ở điểm nào?',
        options: [
            'Cong lên thay vì cong xuống',
            'Nhọn hơn',
            'Lớn hơn',
            'Không có cờ'
        ],
        correct: 0,
        explanation: 'Inverted Scallop có hình dáng cong lên (inverted), ngược với Scallop thường cong xuống.'
    },
    {
        question: 'Hook Reversal là mẫu ngắn hạn hay dài hạn?',
        options: [
            'Dài hạn (hàng tháng)',
            'Trung hạn (hàng tuần)',
            'Ngắn hạn (1-3 phiên)',
            'Intraday'
        ],
        correct: 2,
        explanation: 'Hook Reversal là mẫu ngắn hạn, chỉ kéo dài 1-3 phiên giao dịch.'
    },
    {
        question: 'Mẫu Three Falling Peaks báo hiệu gì?',
        options: [
            'Đảo chiều tăng',
            'Tiếp diễn giảm',
            'Đảo chiều giảm',
            'Đi ngang'
        ],
        correct: 1,
        explanation: 'Three Falling Peaks có ba đỉnh giảm dần, báo hiệu tiếp diễn xu hướng giảm.'
    },
    {
        question: 'Trong mẫu Adam Eve, thời gian hình thành đỉnh/đáy Eve thường như thế nào?',
        options: [
            'Nhanh hơn Adam',
            'Chậm hơn Adam',
            'Bằng Adam',
            'Không liên quan'
        ],
        correct: 1,
        explanation: 'Eve có hình dạng tròn, mất nhiều thời gian hình thành hơn Adam có hình dạng nhọn.'
    },
    {
        question: 'Mẫu nào có thống kê highest average decline?',
        options: [
            'Double Top',
            'Head and Shoulders',
            'Diamond Top',
            'Triple Top'
        ],
        correct: 2,
        explanation: 'Diamond Top có average decline 16%, cao trong các mẫu đảo chiều giảm.'
    },
    {
        question: 'Tại sao Common Gap không nên giao dịch?',
        options: [
            'Quá lớn',
            'Không có giá trị dự báo, thường được lấp đầy',
            'Quá hiếm',
            'Khối lượng quá cao'
        ],
        correct: 1,
        explanation: 'Common Gap xuất hiện trong trading range, không có giá trị dự báo và thường được lấp đầy nhanh.'
    },
    {
        question: 'Mẫu Broadening Wedge khác Broadening thường ở đâu?',
        options: [
            'Có một đường biên nằm ngang',
            'Hai đường biên đều dốc',
            'Không có biên',
            'Chỉ mở rộng một phía'
        ],
        correct: 0,
        explanation: 'Broadening Wedge có một đường biên nằm ngang (hoặc dốc nhẹ) trong khi Broadening thường có hai đường đều dốc.'
    },
    {
        question: 'Mẫu Island Top có tính chất gì đặc biệt?',
        options: [
            'Rất phổ biến',
            'Rất hiếm nhưng tín hiệu mạnh',
            'Tỷ lệ thành công thấp',
            'Không có gap'
        ],
        correct: 1,
        explanation: 'Island Top rất hiếm gặp nhưng tín hiệu đảo chiều rất mạnh với tỷ lệ thành công 73%.'
    },
    {
        question: 'Biến thể nào của Head and Shoulders có tỷ lệ thành công cao nhất?',
        options: [
            'Head and Shoulders cơ bản',
            'Complex Head and Shoulders',
            'Inverse Head and Shoulders',
            'Head and Shoulders với neckline nghiêng'
        ],
        correct: 1,
        explanation: 'Complex Head and Shoulders có tỷ lệ thành công 82%, cao hơn mẫu cơ bản (89%) về độ tin cậy khi đã xác nhận.'
    },
    {
        question: 'Mẫu nào phù hợp nhất cho swing trading?',
        options: [
            'V Top/Bottom',
            'Flag và Pennant',
            'Lazy S',
            'Common Gap'
        ],
        correct: 1,
        explanation: 'Flag và Pennant có thời gian hình thành ngắn (1-3 tuần) và tỷ lệ thành công cao (82-85%), phù hợp cho swing trading.'
    }
];

// ========================================
// State Management
// ========================================

const state = {
    currentSection: 'home',
    currentQuizQuestion: 0,
    quizScore: 0,
    quizStartTime: null,
    selectedAnswer: null,
    answered: false,
    learnedPatterns: [],
    totalTimeSpent: 0,
    streak: 3,
    achievements: ['Khởi đầu', 'Học viên', 'Chính xác'],
    theme: 'dark'
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('chartPatternState');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(state, parsed);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('chartPatternState', JSON.stringify(state));
}

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initParticles();
    initNavigation();
    initSearch();
    initPatternCards();
    initQuiz();
    initProgress();
    initAnimations();
    initThemeToggle();
    animateStats();
    initSmoothScroll();
    initPatternAnimation();

    // Show home section
    document.getElementById('home').classList.add('active');
});

// ========================================
// Particles Animation
// ========================================

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ========================================
// Navigation
// ========================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Section navigation
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateToSection(section);

            // Update active link
            navLinkItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll spy
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        let current = 'home';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });
}

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });

        // Update state
        state.currentSection = sectionId;
        saveState();
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// Search
// ========================================

function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Open search
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    // Close search
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Close on overlay click
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const results = Object.entries(patternsData).filter(([key, pattern]) =>
            pattern.name.toLowerCase().includes(query) ||
            pattern.nameEn.toLowerCase().includes(query)
        );

        searchResults.innerHTML = results.map(([key, pattern]) => `
            <div class="search-result-item" data-pattern="${key}">
                <div class="pattern-badge ${pattern.category}">${getCategoryLabel(pattern.category)}</div>
                <div>
                    <strong>${pattern.name}</strong>
                    <small>${pattern.nameEn}</small>
                </div>
            </div>
        `).join('');

        // Add click handlers
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const patternKey = item.dataset.pattern;
                openPatternModal(patternKey);
                searchModal.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            });
        });
    });

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchBtn.click();
        }
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchClose.click();
        }
    });
}

function getCategoryLabel(category) {
    const labels = {
        reversal: 'Đảo chiều',
        continuation: 'Tiếp diễn',
        bilateral: 'Hai chiều'
    };
    return labels[category] || category;
}

// ========================================
// Pattern Cards - Library System
// ========================================

function initPatternCards() {
    const patternsGrid = document.getElementById('patternsGrid');
    if (!patternsGrid) return;

    // Generate all pattern cards dynamically
    generatePatternCards();

    // Initialize library controls
    initLibraryControls();

    // Update counts
    updateCategoryCounts();
    updateLearnedCount();
}

function generatePatternCards() {
    const patternsGrid = document.getElementById('patternsGrid');
    if (!patternsGrid) return;

    const progress = JSON.parse(localStorage.getItem('chartPatternProgress') || '{}');
    const learned = progress.learned || [];

    const cardsHTML = Object.entries(patternsData).map(([key, pattern]) => {
        const isLearned = learned.includes(key);
        return `
            <a href="pattern.html?id=${key}" class="pattern-card glass-card animate-fade-in"
               data-category="${pattern.category}" data-pattern="${key}" data-name="${pattern.name}" data-name-en="${pattern.nameEn}">
                ${isLearned ? '<div class="pattern-learned-badge"><i class="fas fa-check"></i> Đã học</div>' : ''}
                <div class="pattern-badge ${pattern.category}">${getCategoryLabel(pattern.category)}</div>
                <div class="pattern-visual">
                    ${getPatternSVG(key)}
                </div>
                <h3 class="pattern-name">${pattern.name}</h3>
                <p class="pattern-name-en">${pattern.nameEn}</p>
                <div class="pattern-stats">
                    <div class="stat">
                        <span class="stat-label">Tỷ lệ thành công</span>
                        <span class="stat-value success">${pattern.successRate}%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${pattern.avgMove >= 0 ? 'Độ tăng TB' : 'Độ giảm TB'}</span>
                        <span class="stat-value ${pattern.avgMove >= 0 ? 'positive' : ''}">${pattern.avgMove >= 0 ? '+' : ''}${pattern.avgMove}%</span>
                    </div>
                </div>
                <div class="pattern-action">
                    <i class="fas fa-arrow-right"></i> Xem chi tiết
                </div>
            </a>
        `;
    }).join('');

    patternsGrid.innerHTML = cardsHTML;
}

function getPatternSVG(key) {
    const svgs = {
        // Reversal Patterns
        'head-shoulders': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 Q 30 40, 50 60 Q 70 80, 100 30 Q 130 80, 150 60 Q 170 40, 190 70" stroke="#667eea" stroke-width="2" fill="none"/><circle cx="50" cy="60" r="4" fill="#764ba2"/><circle cx="100" cy="30" r="5" fill="#764ba2"/><circle cx="150" cy="60" r="4" fill="#764ba2"/><line x1="10" y1="70" x2="190" y2="70" stroke="#667eea" stroke-width="1" stroke-dasharray="5,5"/></svg>`,
        'inverse-head-shoulders': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 Q 30 70, 50 50 Q 70 30, 100 90 Q 130 30, 150 50 Q 170 70, 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="4" fill="#43e97b"/><circle cx="100" cy="90" r="5" fill="#43e97b"/><circle cx="150" cy="50" r="4" fill="#43e97b"/></svg>`,
        'double-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 40 L 80 80 L 120 40 L 160 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="40" cy="40" r="4" fill="#f5576c"/><circle cx="120" cy="40" r="4" fill="#f5576c"/><line x1="10" y1="80" x2="180" y2="80" stroke="#f5576c" stroke-width="1" stroke-dasharray="5,5"/></svg>`,
        'double-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 80 L 80 40 L 120 80 L 160 40 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="40" cy="80" r="4" fill="#43e97b"/><circle cx="120" cy="80" r="4" fill="#43e97b"/></svg>`,
        'triple-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 30 40 L 60 80 L 100 40 L 140 80 L 170 40 L 190 100" stroke="#c471f5" stroke-width="2" fill="none"/><circle cx="30" cy="40" r="3" fill="#c471f5"/><circle cx="100" cy="40" r="3" fill="#c471f5"/><circle cx="170" cy="40" r="3" fill="#c471f5"/></svg>`,
        'triple-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 30 80 L 60 40 L 100 80 L 140 40 L 170 80 L 190 20" stroke="#00c6fb" stroke-width="2" fill="none"/><circle cx="30" cy="80" r="3" fill="#00c6fb"/><circle cx="100" cy="80" r="3" fill="#00c6fb"/><circle cx="170" cy="80" r="3" fill="#00c6fb"/></svg>`,
        'rising-wedge': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 70 L 90 80 L 130 50 L 170 60 L 190 40" stroke="#ff9a9e" stroke-width="2" fill="none"/><line x1="10" y1="100" x2="190" y2="60" stroke="#ff9a9e" stroke-width="1"/><line x1="10" y1="80" x2="190" y2="40" stroke="#ff9a9e" stroke-width="1"/></svg>`,
        'falling-wedge': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 90 50 L 130 80 L 170 70 L 190 100" stroke="#30cfd0" stroke-width="2" fill="none"/><line x1="10" y1="30" x2="190" y2="80" stroke="#30cfd0" stroke-width="1"/><line x1="10" y1="50" x2="190" y2="100" stroke="#30cfd0" stroke-width="1"/></svg>`,
        'v-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 80 30 L 100 20 L 120 30 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/><circle cx="100" cy="20" r="4" fill="#f5576c"/></svg>`,
        'v-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 20 L 80 90 L 100 100 L 120 90 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><circle cx="100" cy="100" r="4" fill="#43e97b"/></svg>`,
        'rounding-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 Q 50 100, 100 50 Q 150 20, 190 80" stroke="#f093fb" stroke-width="2" fill="none"/></svg>`,
        'rounding-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 20 Q 50 20, 100 70 Q 150 100, 190 40" stroke="#4facfe" stroke-width="2" fill="none"/></svg>`,
        'diamond-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 60 L 50 30 L 100 10 L 150 30 L 190 60 L 150 90 L 100 110 L 50 90 Z" stroke="#a18cd1" stroke-width="2" fill="none"/><path d="M 30 60 L 70 40 L 100 30 L 130 40 L 170 60" stroke="#a18cd1" stroke-width="1.5" fill="none"/></svg>`,
        'diamond-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 60 L 50 30 L 100 10 L 150 30 L 190 60 L 150 90 L 100 110 L 50 90 Z" stroke="#4facfe" stroke-width="2" fill="none"/><path d="M 30 60 L 70 80 L 100 90 L 130 80 L 170 60" stroke="#4facfe" stroke-width="1.5" fill="none"/></svg>`,

        // Continuation Patterns
        'cup-handle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 40 Q 50 100, 100 100 Q 150 100, 190 40 L 190 70" stroke="#fa709a" stroke-width="2" fill="none"/></svg>`,
        'ascending-triangle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 50 60 L 90 70 L 130 50 L 170 55 L 190 40" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="10" y1="40" x2="190" y2="40" stroke="#43e97b" stroke-width="1" stroke-dasharray="5,5"/></svg>`,
        'descending-triangle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 90 50 L 130 70 L 170 60 L 190 80" stroke="#ff6b6b" stroke-width="2" fill="none"/><line x1="10" y1="80" x2="190" y2="80" stroke="#ff6b6b" stroke-width="1" stroke-dasharray="5,5"/></svg>`,
        'flag': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 30 L 190 50" stroke="#fbc2eb" stroke-width="2" fill="none"/><rect x="40" y="30" width="140" height="25" fill="none" stroke="#fbc2eb" stroke-width="1" stroke-dasharray="3,3"/></svg>`,
        'high-tight-flag': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 40 20 L 190 35" stroke="#f5576c" stroke-width="2" fill="none"/><rect x="40" y="20" width="140" height="20" fill="none" stroke="#f5576c" stroke-width="1" stroke-dasharray="3,3"/></svg>`,
        'rectangle-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 40 L 190 40 M 10 80 L 190 80" stroke="#667eea" stroke-width="2" fill="none"/><path d="M 30 40 L 30 60 L 60 50 L 90 60 L 120 55 L 150 60 L 180 55 L 180 80" stroke="#667eea" stroke-width="1.5" fill="none"/></svg>`,
        'rectangle-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 40 L 190 40 M 10 80 L 190 80" stroke="#43e97b" stroke-width="2" fill="none"/><path d="M 30 40 L 30 60 L 60 55 L 90 60 L 120 55 L 150 60 L 180 55 L 180 80" stroke="#43e97b" stroke-width="1.5" fill="none"/></svg>`,

        // Bilateral Patterns
        'symmetrical-triangle': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 50 60 L 90 75 L 130 55 L 170 65 L 190 60" stroke="#a18cd1" stroke-width="2" fill="none"/><line x1="10" y1="90" x2="190" y2="60" stroke="#a18cd1" stroke-width="1"/><line x1="10" y1="30" x2="190" y2="60" stroke="#a18cd1" stroke-width="1"/></svg>`,
        'broadening-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 20 60 L 50 50 L 80 65 L 110 40 L 150 70 L 180 30" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="20" y1="50" x2="180" y2="30" stroke="#f5576c" stroke-width="1"/><line x1="20" y1="70" x2="180" y2="80" stroke="#f5576c" stroke-width="1"/></svg>`,
        'broadening-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 20 60 L 50 70 L 80 55 L 110 80 L 150 50 L 180 90" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="20" y1="50" x2="180" y2="30" stroke="#43e97b" stroke-width="1"/><line x1="20" y1="70" x2="180" y2="90" stroke="#43e97b" stroke-width="1"/></svg>`,

        // More patterns
        'bump-and-run': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 100 L 40 95 L 70 85 L 100 70 L 130 40 L 160 60 L 190 90" stroke="#f5576c" stroke-width="2" fill="none"/></svg>`,
        'island-reversal': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 60 L 60 60" stroke="#667eea" stroke-width="2" fill="none"/><rect x="70" y="30" width="60" height="40" fill="rgba(245,87,108,0.2)" stroke="#f5576c" stroke-width="1"/><path d="M 140 60 L 190 60" stroke="#f5576c" stroke-width="2" fill="none"/></svg>`,
        'gap': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 70 80" stroke="#667eea" stroke-width="2" fill="none"/><path d="M 90 50 L 190 50" stroke="#667eea" stroke-width="2" fill="none"/><rect x="75" y="55" width="10" height="20" fill="rgba(102,126,234,0.2)"/></svg>`,
        'pipe-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 70 L 60 30 L 80 30 L 130 70 L 190 90" stroke="#f5576c" stroke-width="2" fill="none"/><line x1="60" y1="30" x2="80" y2="30" stroke="#f5576c" stroke-width="3"/></svg>`,
        'pipe-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 60 70 L 80 70 L 130 30 L 190 20" stroke="#43e97b" stroke-width="2" fill="none"/><line x1="60" y1="70" x2="80" y2="70" stroke="#43e97b" stroke-width="3"/></svg>`,
        'scallop': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 50 Q 40 100, 70 80 Q 100 60, 130 90 Q 160 120, 190 60" stroke="#fa709a" stroke-width="2" fill="none"/></svg>`,
        'tower-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 40 30 L 80 30 L 100 30 L 140 30 L 180 80 L 190 100" stroke="#f5576c" stroke-width="2" fill="none"/></svg>`,
        'tower-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 20 L 40 70 L 80 70 L 100 70 L 140 70 L 180 20 L 190 10" stroke="#43e97b" stroke-width="2" fill="none"/></svg>`,
        'horn-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 80 L 50 50 L 100 70 L 150 50 L 190 30" stroke="#f5576c" stroke-width="2" fill="none"/><path d="M 50 50 L 50 20 L 150 20 L 150 50" stroke="#f5576c" stroke-width="1" fill="none" stroke-dasharray="3,3"/></svg>`,
        'horn-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 50 60 L 100 40 L 150 60 L 190 80" stroke="#43e97b" stroke-width="2" fill="none"/><path d="M 50 60 L 50 90 L 150 90 L 150 60" stroke="#43e97b" stroke-width="1" fill="none" stroke-dasharray="3,3"/></svg>`,
        'adam-eve-top': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 90 L 40 35 L 80 80 L 120 30 L 160 80 L 190 100" stroke="#c471f5" stroke-width="2" fill="none"/><circle cx="40" cy="35" r="3" fill="#c471f5"/><circle cx="120" cy="30" r="5" fill="#c471f5"/></svg>`,
        'adam-eve-bottom': `<svg viewBox="0 0 200 120"><path class="pattern-svg" d="M 10 30 L 40 85 L 80 40 L 120 90 L 160 40 L 190 20" stroke="#00c6fb" stroke-width="2" fill="none"/><circle cx="40" cy="85" r="3" fill="#00c6fb"/><circle cx="120" cy="90" r="5" fill="#00c6fb"/></svg>`
    };

    // Fallback SVG for patterns not yet defined
    return svgs[key] || `<svg viewBox="0 0 200 120">
        <path class="pattern-svg" d="M 10 60 Q 50 30, 100 60 Q 150 90, 190 60" stroke="#667eea" stroke-width="2" fill="none"/>
        <circle cx="100" cy="60" r="4" fill="#764ba2"/>
    </svg>`;
}

function initLibraryControls() {
    // Category filter buttons
    const filterBtns = document.querySelectorAll('.library-filters .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            filterPatternCards(category);
        });
    });

    // Library search
    const searchInput = document.getElementById('librarySearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchPatternCards(query);
        });
    }

    // View toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    const patternsGrid = document.getElementById('patternsGrid');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const view = btn.dataset.view;
            if (view === 'list') {
                patternsGrid.classList.add('list-view');
            } else {
                patternsGrid.classList.remove('list-view');
            }
        });
    });
}

function filterPatternCards(category) {
    const cards = document.querySelectorAll('.pattern-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
            card.style.display = '';
            setTimeout(() => card.style.opacity = '1', 10);
            visibleCount++;
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });

    updateVisibleCount(visibleCount);
    hideSearchResultCount();
}

function searchPatternCards(query) {
    const cards = document.querySelectorAll('.pattern-card');
    let visibleCount = 0;

    if (!query) {
        // Reset to show all based on current filter
        const activeFilter = document.querySelector('.library-filters .filter-btn.active');
        const category = activeFilter ? activeFilter.dataset.category : 'all';
        filterPatternCards(category);
        return;
    }

    cards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const nameEn = (card.dataset.nameEn || '').toLowerCase();
        const shouldShow = name.includes(query) || nameEn.includes(query);

        if (shouldShow) {
            card.style.display = '';
            card.style.opacity = '1';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });

    updateVisibleCount(visibleCount);
    showSearchResultCount(visibleCount);
}

function updateCategoryCounts() {
    const counts = { all: 0, reversal: 0, continuation: 0, bilateral: 0 };

    Object.values(patternsData).forEach(pattern => {
        counts.all++;
        if (counts[pattern.category] !== undefined) {
            counts[pattern.category]++;
        }
    });

    document.getElementById('countAll').textContent = counts.all;
    document.getElementById('countReversal').textContent = counts.reversal;
    document.getElementById('countContinuation').textContent = counts.continuation;
    document.getElementById('countBilateral').textContent = counts.bilateral;
    document.getElementById('libraryTotal').textContent = counts.all;
}

function updateLearnedCount() {
    const progress = JSON.parse(localStorage.getItem('chartPatternProgress') || '{}');
    const learned = progress.learned || [];
    document.getElementById('libraryLearned').textContent = learned.length;
}

function updateVisibleCount(count) {
    const el = document.getElementById('visibleCount');
    if (el) el.textContent = count;
}

function showSearchResultCount(count) {
    const el = document.querySelector('.search-result-count');
    if (el) el.style.display = 'flex';
}

function hideSearchResultCount() {
    const el = document.querySelector('.search-result-count');
    if (el) el.style.display = 'none';
}

function openPatternModal(patternKey) {
    const pattern = patternsData[patternKey];
    if (!pattern) return;

    const modal = document.getElementById('patternModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    modalTitle.textContent = `${pattern.name} (${pattern.nameEn})`;

    let statsHtml = '';
    if (pattern.statistics) {
        statsHtml = `
            <div class="pattern-stats-detail">
                <h4><i class="fas fa-chart-bar"></i> Thống kê chi tiết</h4>
                <div class="stats-grid-modal">
                    <div class="stat-item-modal">
                        <span class="stat-label">Phá vỡ tăng</span>
                        <span class="stat-value">${pattern.statistics.bullishBreakout}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Phá vỡ giảm</span>
                        <span class="stat-value">${pattern.statistics.bearishBreakout}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Tăng TB</span>
                        <span class="stat-value">${pattern.statistics.averageRise}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Giảm TB</span>
                        <span class="stat-value">${pattern.statistics.averageDecline}%</span>
                    </div>
                    <div class="stat-item-modal">
                        <span class="stat-label">Pullback</span>
                        <span class="stat-value">${pattern.statistics.pullbackRate}%</span>
                    </div>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="pattern-detail">
            <div class="pattern-detail-header">
                <span class="pattern-badge ${pattern.category}">${getCategoryLabel(pattern.category)}</span>
                <div class="pattern-detail-stats">
                    <div class="stat">
                        <span class="stat-label">Tỷ lệ thành công</span>
                        <span class="stat-value success">${pattern.successRate}%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Biến động TB</span>
                        <span class="stat-value ${pattern.avgMove >= 0 ? 'positive' : ''}">${pattern.avgMove >= 0 ? '+' : ''}${pattern.avgMove}%</span>
                    </div>
                    ${pattern.avgDuration ? `<div class="stat">
                        <span class="stat-label">Thời gian TB</span>
                        <span class="stat-value">${pattern.avgDuration}</span>
                    </div>` : ''}
                </div>
            </div>

            <p class="pattern-description">${pattern.description}</p>

            <div class="pattern-section">
                <h4><i class="fas fa-sitemap"></i> Cấu trúc mẫu</h4>
                <ul>
                    ${pattern.structure.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="pattern-section">
                <h4><i class="fas fa-exchange-alt"></i> Quy tắc giao dịch</h4>
                <ul>
                    ${pattern.tradingRules.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="pattern-section">
                <h4><i class="fas fa-lightbulb"></i> Mẹo giao dịch</h4>
                <ul>
                    ${pattern.tips.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            ${statsHtml}

            <div class="pattern-actions">
                <button class="btn-glass btn-primary" onclick="markAsLearned('${patternKey}')">
                    <i class="fas fa-check"></i> Đánh dấu đã học
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.querySelector('.modal-overlay').addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

function markAsLearned(patternKey) {
    if (!state.learnedPatterns.includes(patternKey)) {
        state.learnedPatterns.push(patternKey);
        saveState();
        showNotification('Đã đánh dấu là đã học!', 'success');
        updateProgress();
    } else {
        showNotification('Bạn đã học mẫu này rồi', 'info');
    }
}

// ========================================
// Quiz
// ========================================

function initQuiz() {
    renderQuizQuestion();

    document.getElementById('submitAnswer').addEventListener('click', submitAnswer);
    document.getElementById('skipQuestion').addEventListener('click', skipQuestion);
    document.getElementById('retakeQuiz').addEventListener('click', retakeQuiz);
    document.getElementById('reviewAnswers').addEventListener('click', reviewAnswers);
}

function renderQuizQuestion() {
    const question = quizData[state.currentQuizQuestion];
    const quizContent = document.getElementById('quizContent');

    let visualHtml = '';
    if (question.visual) {
        const pattern = patternsData[question.visual];
        if (pattern) {
            visualHtml = `
                <div class="quiz-question-visual">
                    <p><strong>Mẫu biểu đồ:</strong> ${pattern.name}</p>
                </div>
            `;
        }
    }

    quizContent.innerHTML = `
        <div class="quiz-question">
            <h3>${question.question}</h3>
            ${visualHtml}
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" data-index="${index}">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
            <div class="quiz-explanation" id="quizExplanation" style="display: none;">
                <p>${question.explanation}</p>
            </div>
        </div>
    `;

    // Add click handlers to options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => selectOption(option));
    });

    // Update progress
    updateQuizProgress();

    // Reset state
    state.selectedAnswer = null;
    state.answered = false;
    document.getElementById('submitAnswer').disabled = true;

    // Start timer
    if (!state.quizStartTime) {
        state.quizStartTime = Date.now();
    }
}

function selectOption(option) {
    if (state.answered) return;

    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Add selection
    option.classList.add('selected');
    state.selectedAnswer = parseInt(option.dataset.index);
    document.getElementById('submitAnswer').disabled = false;
}

function submitAnswer() {
    if (state.selectedAnswer === null || state.answered) return;

    state.answered = true;
    const question = quizData[state.currentQuizQuestion];
    const options = document.querySelectorAll('.quiz-option');

    // Show correct/incorrect
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === state.selectedAnswer) {
            option.classList.add('incorrect');
        }
    });

    // Update score
    if (state.selectedAnswer === question.correct) {
        state.quizScore++;
        document.getElementById('quizScore').textContent = state.quizScore;
        showNotification('Chính xác!', 'success');
    } else {
        showNotification('Chưa đúng, hãy xem giải thích', 'warning');
    }

    // Show explanation
    document.getElementById('quizExplanation').style.display = 'block';

    // Move to next question after delay
    setTimeout(() => {
        nextQuestion();
    }, 2500);
}

function skipQuestion() {
    nextQuestion();
}

function nextQuestion() {
    state.currentQuizQuestion++;

    if (state.currentQuizQuestion >= quizData.length) {
        showQuizResults();
    } else {
        renderQuizQuestion();
    }
}

function showQuizResults() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    const totalQuestions = quizData.length;
    const correctPercent = Math.round((state.quizScore / totalQuestions) * 100);
    const timeSpent = Math.round((Date.now() - state.quizStartTime) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;

    document.getElementById('finalScore').textContent = `${state.quizScore}/${totalQuestions}`;
    document.getElementById('correctPercent').textContent = `${correctPercent}%`;
    document.getElementById('timeSpent').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update achievements
    if (correctPercent === 100 && !state.achievements.includes('Chính xác')) {
        state.achievements.push('Chính xác');
        saveState();
    }
}

function retakeQuiz() {
    state.currentQuizQuestion = 0;
    state.quizScore = 0;
    state.quizStartTime = null;
    state.answered = false;
    state.selectedAnswer = null;

    document.getElementById('quizScore').textContent = '0';
    document.querySelector('.quiz-container').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    renderQuizQuestion();
}

function reviewAnswers() {
    showNotification('Tính năng đang được phát triển', 'info');
}

function updateQuizProgress() {
    const progress = ((state.currentQuizQuestion + 1) / quizData.length) * 100;
    document.getElementById('quizProgress').style.width = `${progress}%`;
    document.getElementById('currentQuestion').textContent = state.currentQuizQuestion + 1;
    document.getElementById('totalQuestions').textContent = quizData.length;
}

// ========================================
// Progress
// ========================================

function initProgress() {
    updateProgress();
    generateActivityCalendar();
}

function updateProgress() {
    const totalPatterns = Object.keys(patternsData).length;
    const learned = state.learnedPatterns.length;
    const percent = Math.round((learned / totalPatterns) * 100);

    // Update ring
    const ring = document.getElementById('progressRing');
    if (ring) {
        const circumference = 2 * Math.PI * 85;
        const offset = circumference - (percent / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }

    // Update stats
    const overallProgress = document.getElementById('overallProgress');
    const learnedPatterns = document.getElementById('learnedPatterns');

    if (overallProgress) overallProgress.textContent = `${percent}%`;
    if (learnedPatterns) learnedPatterns.textContent = learned;

    // Update achievements display
    document.querySelectorAll('.achievement').forEach(achievement => {
        const name = achievement.querySelector('.achievement-name').textContent;
        if (state.achievements.includes(name)) {
            achievement.classList.add('unlocked');
        }
    });
}

function generateActivityCalendar() {
    const calendar = document.getElementById('activityCalendar');
    if (!calendar) return;

    const today = new Date();
    let html = '';

    // Add day labels
    const dayLabels = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    dayLabels.forEach(label => {
        html += `<div class="calendar-day" style="font-weight: 600;">${label}</div>`;
    });

    // Generate 4 weeks
    for (let i = 27; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const isToday = i === 0;
        const isActive = Math.random() > 0.5; // Simulate activity

        html += `
            <div class="calendar-day ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}" title="${date.toLocaleDateString('vi-VN')}">
                ${date.getDate()}
            </div>
        `;
    }

    calendar.innerHTML = html;
}

// ========================================
// Animations
// ========================================

function initAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.pattern-card, .path-item, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

function animateStats() {
    document.querySelectorAll('.stat-number[data-count]').forEach(stat => {
        const target = parseInt(stat.dataset.count);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 30);
    });
}

function initPatternAnimation() {
    const animateBtn = document.getElementById('animatePattern');
    const resetBtn = document.getElementById('resetPattern');

    if (animateBtn) {
        animateBtn.addEventListener('click', () => {
            const patternLine = document.getElementById('patternLine');
            const neckline = document.getElementById('neckline');
            const labels = document.getElementById('patternLabels');
            const volumeBars = document.getElementById('volumeBars');

            // Reset first
            patternLine.classList.remove('animate');

            // Animate pattern line
            setTimeout(() => {
                patternLine.classList.add('animate');
            }, 100);

            // Show neckline
            setTimeout(() => {
                neckline.style.opacity = '1';
                neckline.style.animation = 'fadeIn 0.5s ease';
            }, 2000);

            // Show labels
            setTimeout(() => {
                labels.style.opacity = '1';
                labels.style.animation = 'fadeIn 0.5s ease';
            }, 2500);

            // Show volume bars
            setTimeout(() => {
                volumeBars.style.opacity = '1';
                volumeBars.style.animation = 'fadeIn 0.5s ease';
            }, 3000);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const patternLine = document.getElementById('patternLine');
            const neckline = document.getElementById('neckline');
            const labels = document.getElementById('patternLabels');
            const volumeBars = document.getElementById('volumeBars');

            patternLine.classList.remove('animate');
            neckline.style.opacity = '0';
            labels.style.opacity = '0';
            volumeBars.style.opacity = '0';
        });
    }
}

// ========================================
// Theme Toggle
// ========================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    // Load saved theme
    if (state.theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.hasAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            state.theme = 'dark';
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            state.theme = 'light';
        }
        saveState();
    });
}

// ========================================
// Notifications
// ========================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        background: type === 'success' ? 'rgba(67, 233, 123, 0.2)' : type === 'warning' ? 'rgba(251, 194, 235, 0.2)' : 'rgba(102, 126, 234, 0.2)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${type === 'success' ? '#43e97b' : type === 'warning' ? '#fbc2eb' : '#667eea'}`,
        borderRadius: '12px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 9999,
        animation: 'slideUp 0.3s ease'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Keyboard Shortcuts
// ========================================

document.addEventListener('keydown', (e) => {
    // Navigate sections with number keys
    if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.metaKey) {
        const sections = ['home', 'patterns', 'learn', 'quiz', 'progress'];
        navigateToSection(sections[parseInt(e.key) - 1]);
    }
});

// ========================================
// Make functions globally available
// ========================================

window.markAsLearned = markAsLearned;
window.navigateToSection = navigateToSection;
